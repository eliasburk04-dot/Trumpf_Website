<?php
/**
 * Thomas Burk GmbH - Kontaktformular Backend
 * Sicherer E-Mail-Versand für Kundenanfragen
 */

// Fehlerberichterstattung für Debugging (in Produktion entfernen)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS-Header für Frontend-Integration
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight-Request für CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ============================================
// KONFIGURATION - HIER IHRE DATEN EINTRAGEN
// ============================================

// E-Mail-Konfiguration
$empfaenger_email = "eliasburk04@gmail.com";  // ⚠️ HIER IHRE E-MAIL EINTRAGEN
$empfaenger_name = "Thomas Burk GmbH";
$betreff_prefix = "[Website Anfrage] ";

// SMTP-Konfiguration (optional - für professionellen Versand)
$smtp_server = "smtp.ihr-provider.de";  // z.B. smtp.1und1.de, smtp.strato.de
$smtp_port = 587;
$smtp_username = "ihre-email@domain.de";
$smtp_password = "ihr-passwort";  // ⚠️ SICHER AUFBEWAHREN

// Testmodus: statt Versand wird die E-Mail lokal abgelegt (und kann von Tools wie MailHog abgeholt werden, wenn SMTP nicht konfiguriert ist)
$test_mode = getenv('CONTACT_TEST_MODE') === '1';
$outbox_dir = __DIR__ . DIRECTORY_SEPARATOR . 'outbox';

// Spam-Schutz Einstellungen
$max_anfragen_pro_ip = 5;  // Max. Anfragen pro IP pro Stunde
$honeypot_field = "website";  // Verstecktes Feld gegen Spam-Bots

// Optionale Origin/Referer Prüfung (auf Ihrer Domain anpassen; leer lassen, um zu deaktivieren)
$allowed_origins = [
    // 'https://example.com',
    // 'https://www.example.com'
];

// ============================================
// FUNKTIONEN
// ============================================

/**
 * Bereinigt und validiert Eingabedaten
 */
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

/**
 * Validiert E-Mail-Adresse
 */
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Spam-Schutz durch Rate-Limiting
 */
function check_rate_limit($ip, $max_requests, $time_window = 3600) {
    $log_file = 'rate_limit.log';
    $current_time = time();
    
    // Alte Einträge löschen
    if (file_exists($log_file)) {
        $lines = file($log_file, FILE_IGNORE_NEW_LINES);
        $valid_lines = array_filter($lines, function($line) use ($current_time, $time_window) {
            $parts = explode('|', $line);
            return count($parts) >= 2 && ($current_time - intval($parts[1])) < $time_window;
        });
        file_put_contents($log_file, implode("\n", $valid_lines) . "\n");
    }
    
    // Aktuelle IP-Anfragen zählen
    if (file_exists($log_file)) {
        $content = file_get_contents($log_file);
        $ip_count = substr_count($content, $ip . '|');
        if ($ip_count >= $max_requests) {
            return false;
        }
    }
    
    // Neue Anfrage protokollieren
    file_put_contents($log_file, $ip . '|' . $current_time . "\n", FILE_APPEND | LOCK_EX);
    return true;
}

/**
 * Sendet E-Mail mit Error-Handling
 */
function send_email($to, $subject, $message, $headers) {
    global $test_mode, $outbox_dir;
    if ($test_mode) {
        if (!is_dir($outbox_dir)) {
            @mkdir($outbox_dir, 0777, true);
        }
        $fname = $outbox_dir . DIRECTORY_SEPARATOR . 'mail_' . date('Ymd_His') . '_' . bin2hex(random_bytes(4)) . '.eml';
        $raw = $headers . "\r\n" . 'To: ' . $to . "\r\n" . 'Subject: ' . $subject . "\r\n\r\n" . $message;
        file_put_contents($fname, $raw);
        return ['success' => true, 'method' => 'local_outbox', 'file' => $fname];
    }
    // Versuche zuerst die PHP mail() Funktion
    if (mail($to, $subject, $message, $headers)) {
        return ['success' => true, 'method' => 'php_mail'];
    }
    
    // Falls mail() fehlschlägt, versuche alternative Methoden
    return ['success' => false, 'error' => 'E-Mail konnte nicht gesendet werden'];
}

/**
 * Erstellt HTML-E-Mail Template
 */
function create_email_template($data) {
    $html = '
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Neue Kundenanfrage</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
            .footer { background: #334155; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e40af; }
            .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #dc2626; }
            .urgent { background-color: #fef2f2; border-left-color: #dc2626; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>🔧 Neue Kundenanfrage - Thomas Burk GmbH</h2>
                <p>Eingang: ' . date('d.m.Y H:i:s') . '</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="label">👤 Name:</div>
                    <div class="value">' . htmlspecialchars($data['name']) . '</div>
                </div>
                
                <div class="field">
                    <div class="label">🏢 Unternehmen:</div>
                    <div class="value">' . (empty($data['company']) ? 'Nicht angegeben' : htmlspecialchars($data['company'])) . '</div>
                </div>
                
                <div class="field">
                    <div class="label">📧 E-Mail:</div>
                    <div class="value"><a href="mailto:' . htmlspecialchars($data['email']) . '">' . htmlspecialchars($data['email']) . '</a></div>
                </div>
                
                <div class="field">
                    <div class="label">📞 Telefon:</div>
                    <div class="value">' . (empty($data['phone']) ? 'Nicht angegeben' : htmlspecialchars($data['phone'])) . '</div>
                </div>
                
                <div class="field">
                    <div class="label">🎯 Betreff:</div>
                    <div class="value">' . htmlspecialchars($data['subject']) . '</div>
                </div>
                
                <div class="field">
                    <div class="label">💬 Nachricht:</div>
                    <div class="value urgent">' . nl2br(htmlspecialchars($data['message'])) . '</div>
                </div>
                
                <div class="field">
                    <div class="label">🌐 Technische Details:</div>
                    <div class="value">
                        <strong>IP-Adresse:</strong> ' . htmlspecialchars($data['ip']) . '<br>
                        <strong>User-Agent:</strong> ' . htmlspecialchars($data['user_agent']) . '<br>
                        <strong>Zeitstempel:</strong> ' . $data['timestamp']
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p>Diese Nachricht wurde über das Kontaktformular der Thomas Burk GmbH Website gesendet.</p>
                <p>🔧 TruTool Vertriebs-Partner | CNC-Service Ludwigsburg</p>
            </div>
        </div>
    </body>
    </html>';
    
    return $html;
}

// ============================================
// HAUPTLOGIK
// ============================================

try {
    // Nur POST-Requests akzeptieren
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Nur POST-Anfragen erlaubt');
    }
    
    // IP-Adresse für Rate-Limiting
    $client_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    
    // Rate-Limiting prüfen
    if (!check_rate_limit($client_ip, $max_anfragen_pro_ip)) {
        throw new Exception('Zu viele Anfragen. Bitte versuchen Sie es später erneut.');
    }
    
    // Optionale CSRF/Origin-Prüfung
    if (!empty($allowed_origins)) {
        $origin = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
        if ($origin) {
            $ok = false;
            foreach ($allowed_origins as $ao) {
                if (stripos($origin, $ao) === 0) { $ok = true; break; }
            }
            if (!$ok) {
                throw new Exception('Unerlaubte Herkunft der Anfrage');
            }
        }
    }

    // JSON oder Form-Daten empfangen
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input) {
        $input = $_POST;
    }
    
    // Honeypot-Spam-Schutz
    if (!empty($input[$honeypot_field])) {
        throw new Exception('Spam erkannt');
    }
    
    // Pflichtfelder validieren
    $required_fields = ['name', 'email', 'subject', 'message'];
    foreach ($required_fields as $field) {
        if (empty($input[$field])) {
            throw new Exception("Feld '$field' ist erforderlich");
        }
    }
    
    // Header-Injection Guard für Felder, die in Headern landen können
    $guard = function($v){ return (strpos($v, "\n") === false) && (strpos($v, "\r") === false); };

    // Daten bereinigen
    $data = [
        'name' => sanitize_input($input['name']),
        'company' => sanitize_input($input['company'] ?? ''),
        'email' => sanitize_input($input['email']),
        'phone' => sanitize_input($input['phone'] ?? ''),
        'subject' => sanitize_input($input['subject']),
        'message' => sanitize_input($input['message']),
        'ip' => $client_ip,
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
        'timestamp' => date('d.m.Y H:i:s')
    ];
    
    // E-Mail validieren
    if (!validate_email($data['email'])) {
        throw new Exception('Ungültige E-Mail-Adresse');
    }

    // Header Injection verhindern
    if (!$guard($data['email']) || !$guard($data['name'])) {
        throw new Exception('Ungültige Zeichen in Eingaben');
    }

    // Längenbeschränkungen (spiegeln Clientregeln)
    if (mb_strlen($data['name']) < 2 || mb_strlen($data['name']) > 100) {
        throw new Exception('Name hat eine ungültige Länge');
    }
    if (mb_strlen($data['email']) > 254) {
        throw new Exception('E-Mail ist zu lang');
    }
    if (!empty($data['phone']) && mb_strlen($data['phone']) > 30) {
        throw new Exception('Telefon ist zu lang');
    }
    if (mb_strlen($data['message']) < 10 || mb_strlen($data['message']) > 5000) {
        throw new Exception('Nachricht hat eine ungültige Länge');
    }
    
    // E-Mail-Inhalt erstellen
    $email_subject = $betreff_prefix . $data['subject'] . ' - ' . $data['name'];
    $email_html = create_email_template($data);
    
    // E-Mail-Header
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . $data['name'] . ' <' . $data['email'] . '>',
        'Reply-To: ' . $data['email'],
        'X-Mailer: PHP/' . phpversion(),
        'X-Priority: 3',
        'X-Website-Form: Thomas Burk GmbH Kontaktformular'
    ];
    
    // E-Mail senden
    $send_result = send_email(
        $empfaenger_email,
        $email_subject,
        $email_html,
        implode("\r\n", $headers)
    );
    
    if (!$send_result['success']) {
        throw new Exception($send_result['error']);
    }
    
    // Bestimmen, ob JSON erwartet wird (AJAX/Fetch) oder klassisch (HTML Redirect)
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    $xhr = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? '';
    $wants_json = (stripos($accept, 'application/json') !== false) || (stripos($contentType, 'application/json') !== false) || (strcasecmp($xhr, 'XMLHttpRequest') === 0);

    if ($wants_json) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode([
            'success' => true,
            'message' => 'Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.',
            'timestamp' => date('c')
        ]);
    } else {
        // HTML Redirect zurück zur vorherigen Seite mit Erfolgsparameter
        $ref = $_SERVER['HTTP_REFERER'] ?? '';
        if ($ref) {
            $sep = (strpos($ref, '?') !== false) ? '&' : '?';
            $redirect = $ref . $sep . 'ok=1';
        } else {
            $redirect = 'index.html?ok=1#kontakt';
        }
        header('Location: ' . $redirect, true, 303);
    }
    
} catch (Exception $e) {
    // Fehlerbehandlung
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    $xhr = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? '';
    $wants_json = (stripos($accept, 'application/json') !== false) || (stripos($contentType, 'application/json') !== false) || (strcasecmp($xhr, 'XMLHttpRequest') === 0);

    if ($wants_json) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => $e->getMessage(),
            'timestamp' => date('c')
        ]);
    } else {
        // HTML Redirect zurück mit Fehlermeldung als URL-Parameter
        $ref = $_SERVER['HTTP_REFERER'] ?? '';
        $msg = urlencode(mb_substr($e->getMessage(), 0, 200));
        if ($ref) {
            $sep = (strpos($ref, '?') !== false) ? '&' : '?';
            $redirect = $ref . $sep . 'err=' . $msg;
        } else {
            $redirect = 'index.html?err=' . $msg . '#kontakt';
        }
        header('Location: ' . $redirect, true, 303);
    }
    
    // Fehler protokollieren
    error_log("Kontaktformular Fehler: " . $e->getMessage() . " - IP: $client_ip");
}
?>

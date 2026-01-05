# E-Mail Konfiguration für das Kontaktformular

Das Kontaktformular ist jetzt mit Web.de SMTP konfiguriert. Damit E-Mails tatsächlich versendet werden, müssen Sie folgende Schritte durchführen:

## 1. App-Passwort in Web.de erstellen

1. Melden Sie sich bei Web.de an
2. Gehen Sie zu **Einstellungen** → **Sicherheit**
3. Scrollen Sie zu **App-Passwörter** oder **Passwörter für externe Programme**
4. Erstellen Sie ein neues App-Passwort für "Andere Anwendung"
5. Kopieren Sie das generierte Passwort (es wird nur einmal angezeigt!)

## 2. Umgebungsvariablen setzen

### Option A: .env Datei (Empfohlen für Entwicklung)

Erstellen Sie eine Datei `.env` im Hauptverzeichnis des Projekts:

```env
EMAIL_USER=burk-trutools@web.de
EMAIL_PASSWORD=IhrAppPasswortHier
EMAIL_RECIPIENT=burk-trutools@web.de
```

### Option B: Direkt im Code (Nicht empfohlen für Produktion)

In `server/routes.ts` können Sie das Passwort direkt eintragen:

```typescript
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "IhrAppPasswortHier";
```

## 3. Server neu starten

Nach dem Setzen der Umgebungsvariablen starten Sie den Server neu:

```bash
npm run dev
```

## Fehlerbehebung

### "Authentication failed"
- Stellen Sie sicher, dass Sie ein **App-Passwort** verwenden, nicht Ihr normales Web.de Passwort
- Prüfen Sie, ob IMAP/SMTP in den Web.de Einstellungen aktiviert ist

### "Connection refused"
- Firewall-Einstellungen prüfen
- Port 587 muss erreichbar sein

### E-Mails kommen nicht an
- Prüfen Sie den Spam-Ordner
- Kontrollieren Sie die Server-Logs in der Konsole

## Test

Nach der Konfiguration können Sie das Formular auf der Website testen. Bei erfolgreicher Konfiguration sehen Sie in der Konsole:

```
✅ Kontaktanfrage von [Name] ([E-Mail]) erfolgreich gesendet
```

Bei fehlender Konfiguration werden die Anfragen nur geloggt:

```
⚠️ E-Mail-Passwort nicht konfiguriert. Anfrage nur geloggt:
```

# Domain-Umzug zu IONOS (DNS bei IONOS, Hosting bei Vercel, Mail bei WEB.DE)

Dieses Dokument beschreibt den Umzug einer Domain von WEB.DE zu IONOS, das Hosting der Website bei Vercel und das Beibehalten des Mailservers bei WEB.DE.

## Ausgangslage
- Domain liegt aktuell bei WEB.DE
- DNS soll künftig bei IONOS liegen (z. B. für späteren Raspberry-Pi-Umzug)
- Website-Hosting bleibt bei Vercel
- Mail bleibt bei WEB.DE
- Die Website-Domain ist **nicht** identisch mit der Mail-Domain

## 1) Transfer von WEB.DE zu IONOS (Registrar-Wechsel)
1. Bei WEB.DE den **Auth/EPP-Code** anfordern und ggf. **Transfer-Lock** deaktivieren.
2. Bei IONOS den Domain-Transfer starten und den Auth/EPP-Code eingeben.
3. Im Transfer **IONOS-Nameserver** auswählen, damit DNS nach dem Transfer bei IONOS liegt.
4. Warten bis der Transfer abgeschlossen ist (je nach TLD 1–7 Tage).

## 2) Domain in Vercel hinzufügen
1. Im Vercel-Projekt die Domain hinzufügen.
2. Vercel zeigt dir die **exakten DNS-Records**, die du setzen musst (A, CNAME, ggf. TXT zur Verifikation).

## 3) DNS bei IONOS setzen (für Vercel-Hosting)
In IONOS (Domain -> DNS):
1. **A-Record** für die Root-Domain (Apex) auf den von Vercel angegebenen Zielwert setzen.
2. **CNAME** für `www` auf den von Vercel angegebenen Zielwert setzen.
3. Falls Vercel einen **TXT-Record** zur Verifizierung verlangt, ebenfalls eintragen.
4. Alte Parkplatz-/Standard-Einträge entfernen oder überschreiben.

## 4) Mail bei WEB.DE behalten
Da die Website-Domain **nicht** dieselbe ist wie die Mail-Domain:
- Es sind **keine MX-Records** für die Website-Domain nötig.
- Die WEB.DE-Mailbox bleibt unverändert.

Nur falls du später E-Mail-Adressen **mit der Website-Domain** willst (z. B. info@deinedomain.de), müsstest du MX/SPF/DKIM für diese Domain setzen.

## Optional: Raspberry Pi später anbinden
Wenn du später z. B. `pi.deinedomain.de` nutzen willst:
- Bei IONOS einen **A-Record** für `pi` auf die öffentliche IP deines Anschlusses setzen.
- Root und `www` bleiben weiter auf Vercel.

## Checkliste
- [ ] Auth/EPP-Code von WEB.DE erhalten
- [ ] Transfer bei IONOS gestartet
- [ ] IONOS-Nameserver gewählt
- [ ] Domain in Vercel hinzugefügt
- [ ] DNS-Records in IONOS gesetzt (A/CNAME/TXT)
- [ ] Website unter der Domain erreichbar

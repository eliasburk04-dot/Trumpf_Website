from pathlib import Path

# Alle HTML-Dateien im produkte Verzeichnis
produkte_dir = Path('produkte')
html_files = list(produkte_dir.glob('*.html'))

print(f'Gefunden: {len(html_files)} Dateien\n')

# Alte Navigation - Version 1 (mit Zeilenumbrüchen)
old_nav_formatted = '''      <a href="../index.html#services">Leistungen</a>
      <a href="../index.html#trutool">TruTool</a>
      <a href="../kontakt.html">Kontakt</a>'''

# Neue Navigation - Version 1 (mit Zeilenumbrüchen)
new_nav_formatted = '''      <a href="../index.html#services">Leistungen</a>
      <a href="../index.html#trutool">TruTool</a>
      <a href="../index.html#aktionen">Aktionen</a>
      <a href="../kontakt.html">Kontakt</a>'''

# Alte Navigation - Version 2 (minifiziert, ohne Zeilenumbrüche)
old_nav_minified = '<a href="../index.html#services">Leistungen</a><a href="../index.html#trutool">TruTool</a><a href="../kontakt.html">Kontakt</a>'

# Neue Navigation - Version 2 (minifiziert, ohne Zeilenumbrüche)
new_nav_minified = '<a href="../index.html#services">Leistungen</a><a href="../index.html#trutool">TruTool</a><a href="../index.html#aktionen">Aktionen</a><a href="../kontakt.html">Kontakt</a>'

updated_count = 0
for file_path in html_files:
    content = file_path.read_text(encoding='utf-8')
    updated = False
    
    # Versuche zuerst formatierte Version
    if old_nav_formatted in content:
        content = content.replace(old_nav_formatted, new_nav_formatted)
        updated = True
    # Falls nicht gefunden, versuche minifizierte Version
    elif old_nav_minified in content:
        content = content.replace(old_nav_minified, new_nav_minified)
        updated = True
    
    if updated:
        file_path.write_text(content, encoding='utf-8')
        updated_count += 1
        print(f'✓ {file_path.name}')
    else:
        print(f'- {file_path.name} (bereits aktualisiert oder andere Struktur)')

print(f'\n=== Fertig! {updated_count} von {len(html_files)} Dateien aktualisiert ===')

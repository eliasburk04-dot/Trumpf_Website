import sys
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / 'assets' / 'images' / 'source'
SCRIPT = ROOT / 'assets' / 'tools' / 'add_product_image.py'

NIBBLER = [
    ('trutool-n-160', 'n160.*'),
    ('trutool-n-200', 'n200.*'),
    ('trutool-n-350', 'n350.*'),
    ('trutool-n-500', 'n500.*'),
    ('trutool-n-700', 'n700-*.jpg'),
    ('trutool-n-1000', 'n1000.*'),
]

SCHLITZSCHEREN = [
    ('trutool-c-160', 'c160.*'),
    ('trutool-c-160-spanabtrenner', 'c160-spanabtrenner.*'),
    ('trutool-c-200', 'c200.*'),
    ('trutool-c-250', 'c250.*'),
]

SCHEREN = [
    ('trutool-s-114', 's114.*'),
    ('trutool-s-160', 's160.*'),
    ('trutool-s-250', 's250.*'),
    ('trutool-s-450', 's450.*'),
]

PROFILNIBBLER = [
    ('trutool-pn-200', 'pn200.*'),
    ('trutool-pn-201', 'pn201.*'),
]

PANEL_CUTTER = [
    ('trutool-tpc-165', 'tpc165.*'),
]

FALZSCHLIESSER = [
    ('trutool-f-125', 'f125.*'),
    ('trutool-f-300', 'f300.*'),
    ('trutool-f-301', 'f301.*'),
]

FÜGEPRESSEN = [
    ('trutool-tf-350', 'tf350.*'),
]

KANTENFRÄSGERÄTE = [
    ('trutool-tka-700', 'tka700.*'),
    ('trutool-tka-1500', 'tka1500.*'),
]

SCHWEISSKANTENFORMER = [
    ('trutool-tkf-700', 'tkf700.*'),
    ('trutool-tkf-1500', 'tkf1500.*'),
]

TEILESEPARATOR = [
    ('trutool-ps-100', 'ps100.*'),
]

AUFLAGENLEISTENREINIGER = [
    ('trutool-tsc-100', 'tsc100.*'),
    ('trutool-tsc-200', 'tsc200.*'),
]



def first_match(pattern: str):
    for p in SRC.glob(pattern):
        if p.is_file():
            return p
    return None


def main():
    if not SCRIPT.exists():
        print('Missing add_product_image.py')
        sys.exit(1)
    
    # Process all product categories
    all_products = NIBBLER + SCHLITZSCHEREN + SCHEREN + PROFILNIBBLER + PANEL_CUTTER + FALZSCHLIESSER + FÜGEPRESSEN + KANTENFRÄSGERÄTE + SCHWEISSKANTENFORMER + TEILESEPARATOR + AUFLAGENLEISTENREINIGER
    
    for slug, patt in all_products:
        src = first_match(patt)
        if not src:
            print(f'[SKIP] {slug}: no source for pattern {patt}')
            continue
        print(f'[BUILD] {slug} <- {src.name}')
        subprocess.run([sys.executable, str(SCRIPT), slug, str(src)], check=True)

if __name__ == '__main__':
    main()

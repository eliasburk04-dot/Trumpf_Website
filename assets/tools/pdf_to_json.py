import sys
import os
import json
from datetime import datetime
from typing import List

try:
    from pdfminer.high_level import extract_text
except Exception as e:
    sys.stderr.write("pdfminer.six is required. Install with: pip install pdfminer.six\n")
    raise


def extract_pdf_text(pdf_path: str) -> str:
    return extract_text(pdf_path) or ""


def main(argv: List[str]) -> int:
    if len(argv) < 2:
        print("Usage: pdf_to_json.py <pdf1> [<pdf2> ...]", file=sys.stderr)
        return 2

    pdfs = [p for p in argv[1:] if p.lower().endswith('.pdf')]
    out_dir = os.path.join(os.path.dirname(__file__), 'out')
    os.makedirs(out_dir, exist_ok=True)

    data = {
        "generatedAt": datetime.utcnow().isoformat() + 'Z',
        "files": []
    }

    for pdf in pdfs:
        try:
            text = extract_pdf_text(pdf)
        except Exception as e:
            sys.stderr.write(f"Failed to extract {pdf}: {e}\n")
            continue

        base = os.path.splitext(os.path.basename(pdf))[0]
        txt_path = os.path.join(out_dir, f"{base}.txt")
        with open(txt_path, 'w', encoding='utf-8') as f:
            f.write(text)

        data["files"].append({
            "path": pdf,
            "textFile": txt_path,
            "chars": len(text)
        })

    json_path = os.path.join(out_dir, 'products_raw.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(json_path)
    return 0


if __name__ == '__main__':
    raise SystemExit(main(sys.argv))

#!/usr/bin/env python3
"""
Simple hero image resizing - no processing, just resize to correct dimensions.
"""

import sys
from pathlib import Path
from PIL import Image

def resize_hero_image_only(source_path: Path, output_dir: Path):
    """Simply resize hero image to correct dimensions without any processing."""
    
    print(f"� Resizing hero image: {source_path.name}")
    img = Image.open(source_path)
    
    # Convert to RGB if needed
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Get original dimensions
    original_width, original_height = img.size
    print(f"📐 Original size: {original_width}×{original_height}")
    
    # Target sizes for responsive design (4:3 aspect ratio)
    sizes = [
        (800, 600),   # Small/mobile
        (1200, 900),  # Desktop  
        (1600, 1200), # Large screens
    ]
    
    print("📏 Resizing to correct dimensions only...")
    
    # Create output directory
    output_dir.mkdir(parents=True, exist_ok=True)
    
    created_files = []
    
    for width, height in sizes:
        print(f"📏 Creating {width}×{height} variant...")
        
        # Simple high-quality resize - NO processing
        resized = img.resize((width, height), Image.Resampling.LANCZOS)
        
        # Save as JPG - no special processing
        jpg_path = output_dir / f"hero-trutool-{width}w.jpg"
        resized.save(jpg_path, 'JPEG', quality=95, optimize=True)
        created_files.append(jpg_path)
        
        # Save as WebP
        webp_path = output_dir / f"hero-trutool-{width}w.webp"
        resized.save(webp_path, 'WebP', quality=90, optimize=True)
        created_files.append(webp_path)
        
        print(f"✅ Resized {width}×{height}: JPG + WebP")
    
    print(f"🎯 Hero images resized!")
    return created_files

def main():
    root = Path(__file__).resolve().parents[2]
    source_path = root / 'assets' / 'images' / 'source' / 'hero-trutool.jpg'
    output_dir = root / 'assets' / 'images' / 'hero'
    
    if not source_path.exists():
        print(f"❌ Source image not found: {source_path}")
        sys.exit(1)
    
    created_files = resize_hero_image_only(source_path, output_dir)
    
    print(f"\n📁 Created {len(created_files)} hero images:")
    for file_path in created_files:
        print(f"   📁 {file_path.relative_to(root)}")
    
    print("\n🚀 Simple resize complete!")
    print("   • No processing applied")
    print("   • Only resized to correct dimensions")
    print("   • Original image quality preserved")

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
Script simples para gerar thumbnails e versões WebP das imagens na pasta assets/images.
Requisitos: Pillow (instalar via `pip install -r requirements.txt`).
"""
import os
from PIL import Image

SRC_DIR = os.path.join(os.path.dirname(__file__), '..', 'assets', 'images')
OUT_DIR = os.path.join(SRC_DIR, 'thumbs')
WEBP_DIR = os.path.join(SRC_DIR, 'webp')

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(WEBP_DIR, exist_ok=True)

for fname in os.listdir(SRC_DIR):
    if not fname.lower().endswith(('.jpg','.jpeg','.png')):
        continue
    src = os.path.join(SRC_DIR, fname)
    try:
        img = Image.open(src)
        # gerar thumbnail
        thumb = img.copy()
        thumb.thumbnail((600,600))
        base = os.path.splitext(fname)[0]
        thumb_path = os.path.join(OUT_DIR, base + '_thumb.jpg')
        thumb.save(thumb_path, 'JPEG', quality=80)
        # gerar webp
        webp_path = os.path.join(WEBP_DIR, base + '.webp')
        img.save(webp_path, 'WEBP', quality=80)
        print('Processado:', fname)
    except Exception as e:
        print('Erro processando', fname, e)

print('Concluído. Thumbs em:', OUT_DIR, '\nWebP em:', WEBP_DIR)

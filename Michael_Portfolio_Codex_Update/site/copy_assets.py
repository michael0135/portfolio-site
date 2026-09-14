from pathlib import Path
import shutil

root = Path(r'c:/Users/micha/OneDrive/Desktop/JavaPractice/Portfolio Site/MeetMichael-Redesigned-v3/portfolio-site-main')
new = root / 'portfolio-site-v2'
files = ['2026_Frueh_Michael_2.jpg', 'legbraceteam.jpg', 'websiteicon.png', 'Michael_Frueh_Jr_RESUME03.pdf', 'Michael Frueh Resume.pdf']

for name in files:
    src = root / name
    if src.exists():
        shutil.copy2(src, new / name)
        print(f'copied {name}')
    else:
        print(f'missing {name}')

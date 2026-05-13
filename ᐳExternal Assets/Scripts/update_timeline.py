from pathlib import Path

folder = Path(r"C:\Exionot\Vaults\World Building\Arcane-Bound\Worlds Collide\07 Lore\00 Narratives\01 Main Story")

md_files = list(folder.rglob("*.md"))

file_path = Path(r"C:\Exionot\Vaults\World Building\testFile.md")

lines = ['# Main Story Files']
for file in md_files:
    if "Manuscript" in file.name or file.name == "Index.md":
        continue
    lines.append(f'- [[{file.stem}]]')

file_path.write_text('\n'.join(lines))
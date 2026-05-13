from pathlib import Path
import frontmatter
from datetime import datetime

class Event:
    def __init__(self, year, month, day, group, title):
        self.__time = f'{year}-{self.__month_to_num(month)}-{self.__date_get_num(day)}'
        self.__group = group
        self.__title = title

    def __month_to_num(self, month:str):
        return {
            'EARLY SPRING': '01',
            'SPRING': '02',
            'LATE SPRING': '03',
            'EARLY SUMMER': '04',
            'SUMMER': '05',
            'LATE SUMMER': '06',
            'EARLY AUTUMN': '07',
            'AUTUMN': '08',
            'LATE AUTUMN': '09',
            'EARLY WINTER': '10',
            'WINTER': '11',
            'LATE WINTER': '12',
        }.get(month.upper())
    
    def __date_get_num(self, day:str):
        if len(day) > 3: 
            day = day[0:2]
            return day
        
        return '0'+day[0]
    
    def get_time(self):
        return self.__time
    
    def get_group(self):
        return self.__group
    
    def get_title(self):
        return self.__title

folder = Path(r"C:\Exionot\Vaults\World Building\Arcane-Bound\Worlds Collide\07 Lore\00 Narratives\01 Main Story")

md_files = list(folder.rglob("*.md"))

file_path = Path(r"C:\Exionot\Vaults\World Building\Arcane-Bound\Worlds Collide\07 Lore\00 Narratives\01 Main Story\Timeline.md")

lines = [
    '```button',
    'name Update Timeline',
    'type command',
    'action Shell commands: Execute: UpdateTL',
    'color purple',
    '```',
    f'\n**Last Update:** {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}\n'
    '\n# Main Story',
    '```chronos',
]

for file in md_files:
    if "Manuscript" in file.name or file.name == "Index.md":
        continue
    metadata = frontmatter.load(file).metadata
    try:
        event:Event = Event(
            metadata['time']['year'], 
            metadata['time']['month'], 
            metadata['time']['day'], 
            file.parent.name.removesuffix('Narratives').strip(),
            file.name.removesuffix('.md')
        )
        lines.append(f'- [{event.get_time()}] {{{event.get_group()}}} {event.get_title()}')
    except (KeyError, TypeError):
        continue

lines.append('```')

file_path.write_text('\n'.join(lines))

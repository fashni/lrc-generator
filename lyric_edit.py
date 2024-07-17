import os

# This code is useful for traveling through lyrics files and modifying singers or specific rows.
# In this code I edited second line for editing artist

directory_path = '<yourLyricPath>'

new_second_line = '[ar:Ed Sheeran]\n'

for filename in os.listdir(directory_path):
    if filename.endswith('.lrc'):
        file_path = os.path.join(directory_path, filename)
        with open(file_path, 'r') as file:
            lines = file.readlines()
        
        if len(lines) > 1:
            lines[1] = new_second_line
            with open(file_path, 'w') as file:
                file.writelines(lines)
        else:
            print(f"{filename} does not have a second line.")

print("updated in all text files.")
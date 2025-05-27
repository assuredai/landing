import docx
import os

def extract_text_from_docx(file_path):
    doc = docx.Document(file_path)
    full_text = []
    
    for para in doc.paragraphs:
        full_text.append(para.text)
    
    return '\n'.join(full_text)

docx_path = "/home/ubuntu/upload/20250527 - AssuredAI_OnePager v3.docx"
output_path = "/home/ubuntu/assuredai-website-update/extracted_content.txt"

extracted_text = extract_text_from_docx(docx_path)

with open(output_path, 'w') as f:
    f.write(extracted_text)

print(f"Content extracted to {output_path}")

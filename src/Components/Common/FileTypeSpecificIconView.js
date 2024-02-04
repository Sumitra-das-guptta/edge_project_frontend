import pptxIcon from '../../assets/icons/powerpoint.png';
import pdfIcon from '../../assets/icons/pdf.png';
import xlsxIcon from '../../assets/icons/excel.png';
import docxIcon from '../../assets/icons/word.png';
import imageIcon from '../../assets/icons/image.png';
import zipIcon from '../../assets/icons/zip.png';
import text from '../../assets/icons/text.png';
import unknownFileTypeIcon from '../../assets/icons/unknownFileTypeIcon.svg';

const FileTypeSpecificIcon = {
    pptx: pptxIcon,
    pdf: pdfIcon,
    xlsx: xlsxIcon,
    csv: xlsxIcon,
    doc: docxIcon,
    docx: docxIcon,
    zip: zipIcon,
    rar: zipIcon,
    txt: text,
    md: text,
    svg: imageIcon,
    png: imageIcon,
    jpg: imageIcon,
    jpeg: imageIcon,
    gif: imageIcon,
    jfif: imageIcon,
    pjpeg: imageIcon,
    pjp: imageIcon,
    unknown: unknownFileTypeIcon
};
export default FileTypeSpecificIcon
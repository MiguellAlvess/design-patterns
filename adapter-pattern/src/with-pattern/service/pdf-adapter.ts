export interface PdfAdapter {
  generate(filename: string, content: string): void
}

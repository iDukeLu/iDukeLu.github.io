import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
    year: string 
    monthDay: string
  }
  tags: string[]
  excerpt: string | undefined
}

export declare const data: Post[]

export default createContentLoader(['posts/**/*.md'], {
  excerpt: excerptFn,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date),
        tags: frontmatter.tags
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

// 预览内容
function excerptFn(file: { data: { [key: string]: any }; content: string; excerpt?: string }, options?: any) {
    // 分割内容
    const contentLines = file.content.split('\n');

    // 过滤掉 标题、图片、表格、代码块 的行
    const filteredLines = contentLines.filter(
        line => !line.startsWith('# ') && 
        !line.startsWith('## ') && 
        !line.startsWith('### ') && 
        !line.startsWith('![') && 
        !line.startsWith('|') && 
        !line.startsWith('```'));

    // 找到第一个包含 '---' 的行的索引
    const separatorIndices = filteredLines
        .map((line, index) => line.includes('---') ? index : -1)
        .filter(index => index !== -1);

    if (separatorIndices.length >= 2) {
        // 找到第二个 '---' 行的索引
        let secondSeparatorIndex = separatorIndices[1];
        // 提取该行之后的 10 行
        file.excerpt = filteredLines.slice(secondSeparatorIndex + 1, secondSeparatorIndex + 4).join('\n');
    } else {
        // 如果没有找到第二个 '---' 行，正常提取前 10 行
        file.excerpt = filteredLines.slice(0, 4).join('\n');
    }
}

// 格式化日期
function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('zh-Hans', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }),
    year: date.toLocaleDateString('zh-Hans', {
      year: 'numeric'
    }),
    monthDay: date.toLocaleDateString('zh-Hans', {
      month: '2-digit',
      day: '2-digit'
    })
  }
}
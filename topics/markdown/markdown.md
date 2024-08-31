# Markdown

A quick cheatsheet on markdown.  I'll probably clean this up at some point, but for now it is what it is.

I use [Typora](https://typora.io/) primarily for my markdown editor.  It's a paid application, currently the license is $15.  With its WYSIWYG interface, embedded file viewer, and MermaidJS integration for diagrams, it's the perfect notebook for me.  Here are links specifically aimed at my use cases:

| Description                                             | URL                                           |
| ------------------------------------------------------- | --------------------------------------------- |
| Typora Specific Markdown                                | https://support.typora.io/Markdown-Reference/ |
| MermaidJS - flowcharts, ERD, other diagrams in Markdown | https://mermaid.js.org/intro/                 |

## Links

* Bare links work:  http://www.google.com

* So do links with a title:  [Google](http://www.google.com)

  ```markdown
  [Google](http://www.google.com)
  ```

  

* As do internal links:  [To the test link!](../archive/anewdoc.md)

  ```markdown
  [To the test link!](../archive/anewdoc.md)
  ```

  

* Footnotes are possible[^1]

* And you can link to [headers](#links)

  ```markdown
  And you can link to [headers](#links)
  
  Note that multi word headers will be lowercased with a - between them
  ```

  

## Tables

| first col            | second col |
| -------------------- | ---------- |
| Okay, this is a nice | Editor for |
| Making tables neatly | inside     |
| of markdown          | nifty      |

```markdown
Just start with:


```





[^1]: Here's the syntax:

```markdown
Footnotes are possible[^1]
...
[^1]: Here's the syntax:

```

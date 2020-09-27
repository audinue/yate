const yate = (template, ...substitutions) => new Function(
    'input',
    `const output=[];with(input){${
      (Array.isArray(template)
        ? String.raw(template, ...substitutions)
        : template)
      .split('\n')
      .map(
        line =>
          /^\s*end\b/.test(line)
            ? '}'
            : /^\s*(var|let|const|break|continue|return)\b/.test(line)
              ? line
              : /^\s*(case|default)\b/.test(line)
                ? line + ':'
                : /^\s*(if|switch|for|while|try|with|function)\b/.test(line)
                  ? line + '{'
                  : /^\s*(else|catch)\b/.test(line)
                    ? '}' + line + '{'
                    : `output.push('${
                        line
                          .replace(/([\\'])/g, '\\$1')
                          .replace(/{([^}]+)}/g, (_, expression) => `',(${
                            expression.replace(/\\([\\'])/g, '$1')
                          })??'','`)
                      }\\n')`
      ).join('\n')
    }}return output.join('')`
  )

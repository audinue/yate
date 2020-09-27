const yate = template => new Function(
    'input',
    `const output=[];with(input){${template.split('\n').map(
        line =>
          /^\s*end\b/.test(line)
            ? '}'
            : /^\s*(var|let|const|break|continue|return)\b/.test(line)
              ? line
              : /^\s*(if|else|switch|for|while|try|catch|with|function)\b/.test(line)
                ? line + '{'
                : `output.push('${
                    line.replace(/([\\'])/g, '\\$1')
                      .replace(/{([^}]+)}/g, (_, expression) => `',(${
                        expression.replace(/\\([\\'])/g, '$1')
                      })??'','`)
                  }\\n')`
      ).join('\n')}}return output.join('')`
  )

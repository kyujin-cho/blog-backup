hexo.extend.tag.register('video', (args, content) => {
  const link = content
  const width = args[0]
  const height = args[1]
  return `<video src=${link} width=${width} height=${height} autoplay=false controls=true></video>`
}, {ends: true})

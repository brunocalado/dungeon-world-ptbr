Hooks.on('init', () => {
  
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'dungeon-world-ptbr',
      lang: 'pt-BR',
      dir: 'compendium'
    })
  }
  
})

import _ from 'lodash'
import musicians from './musicians'

const musiciansMap = _.keyBy(musicians, 'name')

const pieces = [
  {
    name: 'Tua Imagem',
    suite: 'Canhoto da Paraiba',
    musician: musiciansMap['Canhoto da Paraiba'],
    theme: 'moonized'
  },
  {
    name: 'Ele e Eu',
    suite: 'Polca Choro',
    musician: musiciansMap['Pixinguinha'],
    theme: 'moonized'
  },
  {
    name: 'Equilibrando',
    suite: 'Esmeraldino Salles',
    musician: musiciansMap['Esmeraldino Salles'],
    theme: 'moonized'
  },
  {
    name: 'Vesper',
    suite: 'Jacob do Bandolim',
    musician: musiciansMap['Jacob do Bandolim'],
    theme: 'moonized'
  },
  {
    name: 'Eu Quero E Sossego',
    suite: 'Choro',
    musician: musiciansMap['KXimbinho'],
    theme: 'moonized'
  },
  {
    name: 'Pra que discutir com Madame',
    suite: 'Samba',
    musician: musiciansMap['Haroldo Barbosa'],
    theme: 'moonized'
  },
]

// Generate piece fullname & ID
pieces.map(piece => {
  let fullname = `${piece.name} via ${piece.suite || piece.snc}`
  if (piece.number) fullname += `, No.${piece.number}`
  const id = fullname
    .replace(/(,?\s|\.(\s?))/g, '-')
    .replace(/é/g, 'e')
    .replace(/É/g, 'E')
  piece.fullname = fullname
  piece.id = id
  return piece
})

// Generate midi path
pieces.map(piece => {
  piece.midiPath = require(`../../assets/midis/${piece.id}.mid`)
  return piece
})

export default pieces

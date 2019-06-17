import pieceTypes from './piece-types'

const pieceLayouts = {}

pieceLayouts[pieceTypes.I] = [
  [
    [false, false, false, false],
    [true,  true,  true,  true ],
    [false, false, false, false],
    [false, false, false, false]
  ],
  [
    [false, false, true,  false],
    [false, false, true,  false],
    [false, false, true,  false],
    [false, false, true,  false]
  ]
]

pieceLayouts[pieceTypes.O] = [
  [
    [false, true,  true,  false],
    [false, true,  true,  false],
    [false, false, false, false],
    [false, false, false, false]
  ]
]

pieceLayouts[pieceTypes.T] = [
  [
    [false, true,  false, false],
    [true,  true,  true,  false],
    [false, false, false, false],
    [false, false, false, false]
  ],
  [
    [false, true,  false, false],
    [false, true,  true,  false],
    [false, true,  false, false],
    [false, false, false, false]
  ],
  [
    [true,  true,  true,  false],
    [false, true,  false, false],
    [false, false, false, false],
    [false, false, false, false]
  ],
  [
    [false, true,  false, false],
    [true,  true,  false, false],
    [false, true,  false, false],
    [false, false, false, false]
  ]
]

pieceLayouts[pieceTypes.L] = [
  [
    [false, false, true,  false],
    [true,  true,  true,  false],
    [false, false, false, false],
    [false, false, false, false]
  ],
  [
    [false, true,  false, false],
    [false, true,  false, false],
    [false, true,  true,  false],
    [false, false, false, false]
  ],
  [
    [true,  true,  true,  false],
    [true,  false, false, false],
    [false, false, false, false],
    [false, false, false, false]
  ],
  [
    [false, true,  true,  false],
    [false, false, true,  false],
    [false, false, true,  false],
    [false, false, false, false]
  ]
]

pieceLayouts[pieceTypes.J] = [
  [
    [true,  false, false, false],
    [true,  true,  true,  false],
    [false, false, false, false],
    [false, false, false, false]
  ],
  [
    [false, true,  true,  false],
    [false, true,  false, false],
    [false, true,  false, false],
    [false, false, false, false]
  ],
  [
    [true,  true,  true,  false],
    [false, false, true,  false],
    [false, false, false, false],
    [false, false, false, false]
  ],
  [
    [false, false, true,  false],
    [false, false, true,  false],
    [false, true,  true,  false],
    [false, false, false, false]
  ]
]

pieceLayouts[pieceTypes.S] = [
  [
    [true,  true,  false, false],
    [false, true,  true,  false],
    [false, false, false, false],
    [false, false, false, false]
  ],
  [
    [true,  false, false, false],
    [true,  true,  false, false],
    [false, true,  false, false],
    [false, false, false, false]
  ]
]

pieceLayouts[pieceTypes.Z] = [
  [
    [false, true,  true,  false],
    [true,  true,  false, false],
    [false, false, false, false],
    [false, false, false, false]
  ],
  [
    [true,  false, false, false],
    [true,  true,  false, false],
    [false, true,  false, false],
    [false, false, false, false]
  ]
]

export default pieceLayouts

export default function(){
  return(
    {
      rows : 2,
      cols : 4,
      cells : [
        [
          {
            position: {
              row: 1,
              col: 1
            },
            state: 0
          },
          {
            position: {
              row: 1,
              col: 2
            },
            state: 1
          },
          {
            position: {
              row: 1,
              col: 3
            },
            state: 0
          },
          {
            position: {
              row: 1,
              col: 4
            },
            state: 1
          }
        ],
        [
          {
            position: {
              row: 2,
              col: 1
            },
            state: 1
          },
          {
            position: {
              row: 2,
              col: 2
            },
            state: 1
          },
          {
            position: {
              row: 2,
              col: 3
            },
            state: 0
          },
          {
            position: {
              row: 2,
              col: 4
            },
            state: 1
          }
        ]
        /*
        {row :1, col:2, state: 1},
        {row :2, col:1, state: 1},
        {row :2, col:2, state: 0}
        */
      ]
    }
  );
}

const styles = {
   header:{
      backgroundColor: 'CadetBlue',
      margin: 0,
      padding: 0,
   },
   ul:{
      backgroundColor: 'MediumSlateBlue',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplate: '50px / repeat(3,minmax(90px,1fr))',
      gridAutoRows: 50,
      gridAutoColumns: 90,
      gridAutoFlow: 'dense',
      counterReset: 'item'
   },
   li:{
      
      margin: 'auto',
      
   }
}

export default styles
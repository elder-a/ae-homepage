export function dailyWordReturn(){
  const date = new Date();
  const monthDate = date.getMonth() + ',' + date.getDate();
  return dailyWordChosen(monthDate);
}


export function dailyWordChosen(monthDate){
  const dailyLetter = {
    '0,29': 'AEDGHC',
    '0,30': 'JKLUIE',
    '0,31': 'OUYLFM',
    '1,1': 'JVYSLI',
    '1,2': 'HCYWEW',
    '1,3': 'QPSIUN',
    '1,4': 'JCHSUA',
    '1,5': 'HCYWOP',
    '1,6': 'ZMLISJ',
    '1,7': 'PIOGLM',
    '1,8': 'UYRYNE',
    '1,9': 'MCVDKU',
    '1,10': 'BCNMSE',
    '1,11': 'GJSIJA',
    '1,12': 'PDOLUS',
    '1,13': 'WEULCI',
    '1,14': 'CMVDSU',
    '1,15': 'POXUNS',
    '1,16': 'ISULEM',
    '1,17': 'CNDUMA',
    '1,18': 'MXNSHU',
    '1,19': 'GIUSLA',
    '1,20': 'HEGXBL',
    '1,21': 'QUWEMN',
    '1,22': 'OPLECK',
    '1,23': 'ZIUEML',
    '1,24': 'WOLERM',
    '1,25': 'OPYELN',
    '1,26': 'MEUSNR',
    '1,27': 'CYETSN',
    '1,28': 'VOLYPS',


  };
  if(dailyLetter[monthDate] == null){
    return 'XAIJKL';
  }
  
  return dailyLetter[monthDate];
}
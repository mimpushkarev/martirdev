export const phoneConverter = (phoneNumberString: string) => {
    var cleaned = (phoneNumberString).replace(/\D/g, '');
    var phoneMatchesMask = cleaned.match(/^([8|+7])?(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (phoneMatchesMask) {
      var intlCode = (phoneMatchesMask[1] ? '+7 ' : '');
      return `${intlCode}(${phoneMatchesMask[2]}) ${phoneMatchesMask[3]}-${phoneMatchesMask[4]}-${phoneMatchesMask[5]}`;
    }
    return '';
  }
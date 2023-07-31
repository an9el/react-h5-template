export function getGenderByIdNumber(idNumber: string) {
  if (idNumber) {
    let genderCode // 性别代码
    if (idNumber.length == 18) {
      // 二代身份证号码长度为18位（第17位为性别代码）
      genderCode = Number(idNumber.charAt(16))
    } else if (idNumber.length == 15) {
      // 一代身份证号码长度为15位（第15位为性别代码）
      genderCode = Number(idNumber.charAt(14))
    }
    if (genderCode && !isNaN(genderCode)) {
      // 两代身份证号码的性别代码都为男奇女偶
      if (genderCode % 2 == 0) {
        return 'F'
      }
      return 'M'
    }
  }
}

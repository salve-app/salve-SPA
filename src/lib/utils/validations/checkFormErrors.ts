import validateCpf from './validateCpf'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { profileNameMatch, dateMatch, phoneMatch } from '../constants/regex'
import { ProfileForm } from '../protocols/inputs'

dayjs.extend(customParseFormat)

export function checkErrorsProfileForm(profile: ProfileForm) {
  const errorsDataForm = {
    fullName: !profileNameMatch.test(profile.fullName),
    cpf: !validateCpf(profile.cpf),
    birthday: !(
      dateMatch.test(profile.birthday) &&
      dayjs(profile.birthday, 'DD/MM/YYYY', true).isValid()
    ),
    phoneNumber: !phoneMatch.test(profile.phoneNumber),
  }

  const errorDataFormHasFalse = Object.values(errorsDataForm).some(
    (value) => value,
  )

  return {
    hasError: errorDataFormHasFalse,
    errorsDataForm: {...errorsDataForm, category: 'profile'},
  }
}

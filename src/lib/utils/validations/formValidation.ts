import validateCpf from './validateCpf'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { profileNameMatch, dateMatch, phoneMatch } from '../constants/regex'
import { ProfileForm } from '../protocols/inputs'
import { checkErrorsProfileForm } from './checkFormErrors'

dayjs.extend(customParseFormat)

function validateProfileForm(profile: ProfileForm) {
  const { hasError, errorsDataForm } = checkErrorsProfileForm(profile)

  if (hasError) throw errorsDataForm

  const validatedForm = {
    ...profile,
    birthday: dayjs(profile.birthday, 'DD/MM/YYYY', true).toDate(),
  }

  return validatedForm
}

export default { profile: validateProfileForm }

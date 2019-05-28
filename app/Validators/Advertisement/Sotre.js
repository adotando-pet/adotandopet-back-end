'use strict'

class AdvertisementSotre {
  get validateAll(){
    return true
  }
  get rules () {
    return {
      isCastrated: "required|boolean",
      isDisabled: "required|boolean",
      description: "required|string|min:30|max:150",
      isVacined: "required|boolean",
      specialCare: "required|boolean",
      temperament: "required|string",
      liveWell: "required|array",
      sociable: "required|array",
      pet_id: "required|integer",
      specialCareDescription: "required_if:specialCare|string|min:30|max:200"
    }
  }
}

module.exports = AdvertisementSotre

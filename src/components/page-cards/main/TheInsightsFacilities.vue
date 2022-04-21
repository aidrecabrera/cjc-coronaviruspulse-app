<template>
  <div>

  </div>
</template>

<script>
import axios from "axios"
import { titleCase } from "title-case"
export default {
  data() {
    return {
    }
  }
}
await axios({
  method: 'get',
  url: 'https://covid19-api-philippines.herokuapp.com/api/facilities/',
  headers: {
  }
}).then(response => {
  let HospitalArray = response.data.data
  let DigosListNames = []
  DigosListNames.push(HospitalArray[302].cf_name, HospitalArray[318].cf_name, HospitalArray[338].cf_name, HospitalArray[473].cf_name, HospitalArray[730].cf_name, HospitalArray[1162].cf_name)
  DigosListNames = DigosListNames.map(temp => titleCase(temp));
  DigosListNames[1] = 'Digos Doctors Hospital, Inc.'
  DigosListNames[4] = 'Medical Center of Digos Cooperative Hospital (MCDC)'
  console.log(DigosListNames);
  const CompleteDigosHospitalInformation = DigosListNames.map((id, index) => {
    let hospitalInformation = {}
    hospitalInformation.id = index
    hospitalInformation.name = DigosListNames[index]
    return hospitalInformation
  })
  console.log(CompleteDigosHospitalInformation);
})
</script>

<style scoped>
</style>
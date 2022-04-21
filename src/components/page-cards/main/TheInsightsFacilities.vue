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
  console.log(HospitalArray);
  let DigosListStatus = []
  DigosListStatus.push(HospitalArray[302], HospitalArray[318], HospitalArray[338], HospitalArray[473], HospitalArray[730], HospitalArray[1162])
  console.log(DigosListStatus);
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
    hospitalInformation.confinedAsymptomatic = DigosListNames
    hospitalInformation.confinedDied = DigosListNames
    hospitalInformation.confinedSevere = DigosListNames
    hospitalInformation.discharged = DigosListNames
    hospitalInformation.confinedMild = DigosListNames

    conf_asym: 0
conf_crit: 0
conf_died: 0
conf_mild: 6
conf_severe: 0
discharged: 0
    return hospitalInformation
  })
  console.log(CompleteDigosHospitalInformation);
})
</script>

<style scoped>
</style>
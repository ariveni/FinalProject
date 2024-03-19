<template>
  <div>
    <div refs="content">
      <table>
        <thead>
          <tr>
            <th>Disease Name</th>
            <th>{{ props.disease }}</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
    <button @click="download">Download PFD</button>
  </div>
</template>
<script setup>
import jspdf from 'jspdf'
const props = defineProps({
  disease: String,
  drugs: Array
})
const download = () => {
  const pdf = new jspdf()
  const html = document.querySelector("[refs='content']").innerHTML // Change this line
  console.log(html)
  // html = this.$refs.content.innerHTML
  pdf.html(html, {
    x: 50,
    y: 5,

    callback: () => {
      pdf.save('report.pdf') // Ensure PDF is saved properly
    }
  })
  console.log(pdf)
}
</script>
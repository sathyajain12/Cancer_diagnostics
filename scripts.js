function changeValue(fieldName, operation) {
  const inputElement = document.getElementById(fieldName);
  let currentValue = parseInt(inputElement.value);

  if (operation === 'increment') {
    currentValue++;
  } else if (operation === 'decrement') {
    if (currentValue > 0) {
      currentValue--;
    }
  }

  inputElement.value = currentValue;
}




function checkAdverseEffects() {
  var hasAdverseEffects = confirm("Does the patient have any adverse effects of treatment?");
  
  if (hasAdverseEffects) {
    var effectType = prompt("Select the type of adverse effect:\n1. Diarrhea\n2. LM/Non Neutropenic Fever\n3. Jaundice\n4. Stomatitis\n5. Facial Rash\n6. Hepatitis\n7. Toothache\n8. HFS (Hand-Foot Syndrome)\n9. Cough\n10. Nausea\n11. Vomiting");
    
    if (effectType) {
      var grade = prompt("Select the grade of the adverse effect:\n1. Mild\n2. Moderate\n3. Severe\n4. Life-threatening\n5. Death");
      
      if (grade) {
        alert("Adverse effect recorded:\nType: " + effectType + "\nGrade: " + grade);
      }
    }
  }
}

document.getElementById("adverseForm").addEventListener("submit", function (event) {
  event.preventDefault();
  checkAdverseEffects();
});

function getGradeDescription(grade) {
  switch (grade) {
    case "1":
      return "Adverse events at this grade are mild and usually do not require treatment. They cause minimal discomfort and do not interfere significantly with the patient's daily activities.";
    case "2":
      return "These are moderate adverse events. They may cause some discomfort and may slightly interfere with the patient's daily activities. Grade 2 events may require minimal, local, or non-invasive intervention.";
    case "3":
      return "Severe adverse events significantly affect the patient's well-being. They typically require medical intervention or hospitalization. Grade 3 events are disabling but not immediately life-threatening.";
    case "4":
      return "These adverse events are life-threatening and require urgent intervention. They may cause severe disruption to the patient's daily life and may necessitate hospitalization or intensive care.";
    case "5":
      return "This grade is used when an adverse event leads to the patient's death.";
    default:
      return "Unknown grade";
  }
}





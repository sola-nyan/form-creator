# form-creator

A micro library for TypeScript, converts object to FormData or URLSearchParams.

# How to use

Converts object to FormData
```
  import {objectToFormData} from '@solanyan/form-creator'
   
  const inputsObject = {
    input: 'value',
    nestForm: {
      inputA: 'valueA',
      inputB: 'valueB',
    },
    listForm: [
      {
        inputA: 'valueA',
        inputB: 'valueB',
      },
      {
        inputA: 'valueA',
        inputB: 'valueB',
      },
    ],
  }

  const formData = objectToFormData(inputsObject)
  console.log(formData.forEach((value, key) => console.log(`${key} : ${value}`)))
```

console shows:
```

input : value
nestForm.inputA : valueA
nestForm.inputB : valueB
listForm[0].inputA : valueA
listForm[0].inputB : valueB
listForm[1].inputA : valueA
listForm[1].inputB : valueB
...

```
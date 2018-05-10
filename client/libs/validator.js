import * as v from "validator"

const Validator = (form) => {
  let result = { valid: true, errors: [] }
  const ruleRegex = /(.*)\[(.*)\]/gi
 
  for(fieldName in form){
    const field = form[fieldName]
    for(i in field.rules){
      const rule = field.rules[i]
      const matches = ruleRegex.exec(rule)
      let invalidField = false
      let ruleName = rule 
      let params = param = null

      if(matches != null){
        ruleName = matches[1]
        if(matches[2].indexOf(",") > -1){
          params = matches[2].split(",")
        }else{
          param = matches[2]
        }
      }
 
      switch(ruleName){
      case "required":
        if(v.isEmpty(field.value)){
          result.errors.push(i18n.__("validations.required", { "label": field.label }))
          invalidField = true
        }
        break
      case "isEmail":
        if(!v.isEmail(field.value)){
          result.errors.push(i18n.__("validations.invalidEmail", { "label": field.label }))
          invalidField = true
        }
        break
      case "isLength":
        if(!v.isLength(field.value, params[0], params[1])){
          result.errors.push(i18n.__("validations.lengthMin", { "label": field.label, "min": params[0] }))
          invalidField = true
        }
        break
      case "equals":
        const target = form[param]
        if(!v.equals(field.value, target.value)){
          result.errors.push(i18n.__("validations.equals", { "label": field.label, "target": target.label }))
          invalidField = true
        }
        break
      }

      if(invalidField)
        break
    }
  }

  if(result.errors.length > 0)
    result.valid = false

  return result

}

export default Validator

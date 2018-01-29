export default class HtmlUtils {
  static getFormData(event) {
    const util = new HtmlUtils();
    let data = {};
    if (event.type === 'submit') {
      data = util.formDataFromEvent(event);
    }
    return data;
  }
  formDataFromEvent(event) {
    const data = {};
    for (let index = 0; index < event.target.elements.length; index++) {
      const item = event.target.elements[index];
      if (item.tagName === 'INPUT' && ['text', 'password'].indexOf(item.attributes['type'].value) !== -1) {
        data[item.id] = item.value;
      }
    }
    return data;
  }
}
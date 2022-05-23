export const checkErrorState = (err: undefined | { [key: string]: any }): boolean => {
  if (!err) return true;
  if (typeof err === 'string') return err === undefined;
  else if (Object.keys(err).length === 0) return true;
  else {
    for (let value of Object.values(err)) {
      if (value !== null && value !== undefined) {
        return false;
      }
    }
    return true;
  }
}


export const isNotEmpty = (value: any): boolean => {
  let _f = (value !== null) && (value !== undefined);
  if (typeof value == 'string') {
    _f = _f && value.trim().length !== 0;
  } else if (Array.isArray(value)) {
    _f = _f && value.length !== 0;
  }
  return _f;
};

export const isEmpty = (value: any): boolean => !isNotEmpty(value);

export function isEmptyAll(value: any[]): boolean {
  let f = true;
  value.forEach(val => { f = f && isEmpty(val) });
  return f;
}


export const isNotEmptyArray = (value: any[] | undefined): boolean => {
  if (Array.isArray(value) && value.length > 0) return true;
  return false;
}

export const isEmptyArray = (value: any[] | undefined): boolean => !isNotEmptyArray(value);


export const isEqualArrays = <T = any>(arr1?: T[], arr2?: T[], equalityFn?: (a: T, b: T) => boolean): boolean => {
  if (arr1 === arr2) return true;
  if (!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) return false;
  const _equals = (a: T, b: T) => {
    if(equalityFn) return equalityFn(a, b);
    return a === b;
  }
  for (var i = 0; i < arr1.length; i++)
    if (!_equals(arr1[i], arr2[i]))
      return false;
  return true;
};

export const isEqualObjects = (a: any, b: any): boolean => {
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
};

export const isEmptyObject = (obj: object): boolean => {
  return !Object.keys(obj).length
}

export const isObjectAllFieldsFull = (obj: object): boolean => {
  if (isEmptyObject(obj)) {
    return false
  }

  for (let val of Object.values(obj)) {
    if (val === null || val === undefined || val === '') {
      return false
    }
  }

  return true
}

export const isLetter = (value: string): boolean => {
  const _letter = /^[a-zA-ZüğöəıiçşÜĞÖƏIİÇŞ]+$/;
  return _letter.test(value);
};

export const isNumber = (value: any): boolean => {
  const _number = /^\d+$/;
  return _number.test(value);
};

export const isPhone = (value: string | string[]): boolean => {
    // const _phone = /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1}$)/gm;
    const _phone = /(\+?)(\d{3,5})(-?)(\d{3})(-?)(\d{2})(-?)(\d{2}$)/;
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (!_phone.test(value[i])) return false;
      }
      return true;
    } else return _phone.test(value.replace(/[\s/]+/g, "").trim());
};

export const isPin = (value: string): boolean => {
  const _pin = /^[a-zA-Z0-9]+$/;
  return _pin.test(value);
};

export const isEmail = (value: string | string[]): boolean => {
  const _email = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (!_email.test(value[i])) return false;
    }
    return true;
  }
  else return _email.test(value);
};

export const isText = (value: string): boolean => {
  const _text = /.*/;
  return _text.test(value);
};

export const isDate = (value: string | number | Date | null): boolean => {
  if (value === null) return true;
  if ((typeof value === 'string' || typeof value === 'number') && !isNaN(new Date(value).getMonth())) return true;
  if (typeof value === 'object' && !isNaN(value.getMonth())) return true;
  return false;
}



export const isPastDay = (date: Date | null): boolean => {
  const today = new Date();
  if (date && (date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0))) {
    return true;
  }

  return false;
}

export const isPastDays = (dateList: Array<any>): boolean => {
  if (!(dateList && dateList.length)) {
    return false
  }

  return dateList.filter(selectedDate => isDate(selectedDate)).some(date => isPastDay(new Date(date)))
}










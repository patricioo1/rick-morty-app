export const getQueryParameters = (name, status, gender) => {
    let url = '/?'
    if (!!name) {
      url = url.concat(`name=${name}&`)
    }
    if (!!status) {
      url = url.concat(`status=${status}&`)
    }
    if (!!gender) {
      url = url.concat(`gender=${gender}`)
    }
    return url;
  }
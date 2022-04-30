interface ResponseData<T = any> {
    status: number,
    flag: boolean,
    message: string,
    data: T
}

export default ResponseData

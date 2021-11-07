import ApiCallHelper from '../../utils/ApiCallHelper'
import makeRequest from '../makeRequest'
export default async () =>  {
    const apiCallHelper = new ApiCallHelper("/posts/")
    console.log("apicall helper " , apiCallHelper)
    await makeRequest(apiCallHelper)
}
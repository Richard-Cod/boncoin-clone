const KRoutes = {
    profile : "/profile",
    home : "/home",
    login : "/account/login",
    register : "/account/register",
    registerPart : "/account/register/part",
    registerPro : "/account/register/pro",
    verifyemailVerify : (code) =>  `/verifyemail/verify/${code}`,
    verifyemailSend : `/verifyemail/send/`,
}

export {KRoutes}
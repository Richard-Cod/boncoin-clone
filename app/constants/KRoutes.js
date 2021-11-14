const KRoutes = {
    profile : "/profile",
    home : "/home",
    login : "/account/login",
    register : "/account/register",
    registerPart : "/account/register/part",
    registerPro : "/account/register/pro",
    verifyemailVerify : (code) =>  `/verifyemail/verify/${code}`,
    offresCity : (city) =>  `/annonces/offres/${city}`,
    verifyemailSend : `/verifyemail/send/`,
}

export {KRoutes}
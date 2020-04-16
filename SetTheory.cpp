#include "SetTheory.h"
#include <stdexcept>
using namespace std;

/* True or false: S in T? */
bool isElementOf(Object S, Object T) {
    if(isSet(T)){
        set<Object> TasSet = asSet(T);
        if(TasSet.count(S)) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

/* True or false: S is a subset of T? */
bool isSubsetOf(Object S, Object T) {
    if(isSet(S) && isSet(T)){
        set<Object> SasSet = asSet(S);
        set<Object> TasSet = asSet(T);
        for(const Object& x: SasSet){
            if(!TasSet.count(x)){
                return false;
            }
        }
        return true;
    }
    return  false;
}

/* True or false: S and T are sets, and S n T = emptyset? */
bool areDisjointSets(Object S, Object T) {
    if(isSet(S) && isSet(T)){
        set<Object> SasSet = asSet(S);
        set<Object> TasSet = asSet(T);

        if(SasSet.size() == 0 || TasSet.size() == 0) return true;

        for(const Object& x: SasSet){
            if(TasSet.count(x)){
                return false;
            }
        }
        return true;
    }

    return false;
}

/* True or false: S = {T}? */
bool isSingletonOf(Object S, Object T) {
    if(isSet(S)){
        set<Object> SasSet = asSet(S);
        if(SasSet.size() > 1 || !SasSet.count(T)) return false;
        return true;
    }
    return false;
}

/* True or false: S and T are sets, and S in P(T)? */
bool isElementOfPowerSet(Object S, Object T) {
    if(isSet(S) && isSet(T)){
        return isSubsetOf(S, T);
    }

    return false;
}


/* True or false: S and T are sets, and S is a subset of P(T)? */
bool isSubsetOfPowerSet(Object S, Object T) {
    if(isSet(S) && isSet(T)){
        set<Object> SasSet = asSet(S);

        for(const Object& x: SasSet){
            if(!isSubsetOf(x, T)){
                return false;
            }
        }
        return true;

    }
    return false;
}

/* True or false: S and T are sets, and S is a subset of P(P(T))? */
bool isSubsetOfDoublePowerSet(Object S, Object T) {
   if(isSet(S) && isSet(T)){
       set<Object> SasSet  = asSet(S);

       for(const Object& x: SasSet){
           if(!isSubsetOfPowerSet(x, T)){
               return false;
           }
       }
       return true;
   }
   return false;
}

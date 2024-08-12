using System;

static class QuestLogic
{
    public static bool CanFastAttack(bool knightIsAwake)
    {
        return !knightIsAwake;
    }

    public static bool CanSpy(bool knightIsAwake, bool archerIsAwake, bool prisonerIsAwake)
    {
        bool result = (knightIsAwake||archerIsAwake||prisonerIsAwake)?  true :  false;
        return result
    }

    public static bool CanSignalPrisoner(bool archerIsAwake, bool prisonerIsAwake)
    {
        bool result = (!archerIsAwake&&prisonerIsAwake) ? true:false;
        return result;
    }

    public static bool CanFreePrisoner(bool knightIsAwake, bool archerIsAwake, bool prisonerIsAwake, bool petDogIsPresent)
    {
             
        if(petDogIsPresent&&!archerIsAwake){
            return true;
        }
        else if(!knightIsAwake&&!archerIsAwake&&prisonerIsAwake){
            return true;
        }else{
            return false;
        }
    }
}

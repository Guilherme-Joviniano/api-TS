import { CustomError } from 'ts-custom-error'

export default class UnsupportedStoreData extends CustomError {

    private static UNSUPPORTED_STORE_DATA: string = "Please set correctly data to the create a user!"
    private static CODE: number = 202
    private constructor(public code: number, public message: string, public type: string = 'UnsupportedStoreData') { 
        super(message)
    }
    
    static ERROR: UnsupportedStoreData = new UnsupportedStoreData(this.CODE, this.UNSUPPORTED_STORE_DATA);
}
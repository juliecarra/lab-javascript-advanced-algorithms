function QueueDataStructure () {
        this.queueControl = [];
        this.MAX_SIZE = 19;
 
}

QueueDataStructure.prototype.isEmpty = function () { //permet d'appeler la fonction StackDataStructure 
    if(this.queueControl.length == 0) {
        return true;
    } else {
        return false;
    }
}

QueueDataStructure.prototype.canEnqueue = function () {
    if(this.queueControl.length == this.MAX_SIZE) {
        return false;
    }
    else {
        return true;
    }
}

QueueDataStructure.prototype.enqueue = function (element) {
    /* if(this.stackControl != this.MAX_SIZE) {
         return true;
     }
     else {
         return false;
     }*/
     if(this.canEnqueue()) {
         this.queueControl.unshift(element);
         return this.queueControl;
        
     }
     else {
        return "Queue Overflow";
     }
           
        
    }
    
     
     QueueDataStructure.prototype.dequeue = function (element) {
        /*if(this.stackControl.length == 0) {
            return false;
        }
        else {
            return true;
        }
        */
    
        if (this.isEmpty()) {
            return "Queue Underflow";
          } else {
            return this.queueControl.pop(element);
          }
    }


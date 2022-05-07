import { appStateData } from "../_helper";

//classes used to render a specific modal based on the status of the work flow
export class ClientModal {
  constructor(val, func) {
    this.val = val;
    this.func = func;
  }

  //show modal for approval and reject
  showReviewModal() {
    if (this.val === appStateData.state.complete) {
      this.func(true);
    }
  }
}

export class ClientOfficerModal {
  constructor(val, func) {
    this.val = val;
    this.func = func;
  }

  //show modal for approval and reject
  showReviewModal() {
    if (this.val === appStateData.state.awaitingClientEngagementOfficer) {
      this.func(true);
    }
  }
}

export class FoodOfficerModal {
  constructor(val, func) {
    this.val = val;
    this.func = func;
  }

  //show modal for approval and reject
  showReviewModal() {
    if (this.val === appStateData.state.awaitngFoodProcessingOfficer) {
      this.func(true);
    }
  }
}

export class FoodTasterModal {
  constructor(val, func) {
    this.val = val;
    this.func = func;
  }

  //show modal for approval and reject
  showReviewModal() {
    if (this.val === appStateData.state.awaitingFoodTaster) {
      this.func(true);
    }
  }
}

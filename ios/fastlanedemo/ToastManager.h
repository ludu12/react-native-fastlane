//
//  ToastManager.h
//  fastlanedemo
//
//  Created by Luke Dunscombe on 6/15/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#ifndef ToastManager_h
#define ToastManager_h
#import <React/RCTBridgeModule.h>
#import "UIView+Toast.h"

@interface ToastManager : NSObject <RCTBridgeModule>
- (void)showToastMessage:(NSString *)message;
@end

#endif /* ToastManager_h */

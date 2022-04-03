#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import "RNSplashScreen.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

[RNSplashScreen show];

@property (nonatomic, strong) UIWindow *window;

@end

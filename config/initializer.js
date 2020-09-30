"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
/*
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mMMMMMMMMMNNNmmNNNMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNMMMMNNNNNmmmddhdddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mddNMMNy:/odNmmddmmNNmdhhddmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmdNMNd:--+dNmmddhhddmmhsyhhmdmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNmdNmy:.-oyNmmmhmdhho+sososyhhhddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmNdh+-`.:oyNNdmmdmmdo-://oysssyhhhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nmmmoyyyo+osdNmdmmddNNhs+/::/+osyssydyhdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNmhsymMMNmmmmdmdNNddNmsso+++////ossssyyhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mhhhmNNMNNNhssshhmmddmmssyooooso/::+oysshhhhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmdhdddNNdyoosyhdmddmmmsoooooyysyys/::/oyyhhhyMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdddhddmhsooshdmdmdhhyyyysso/ooo+syhhs/-/+shyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dyyhdmd+ososhdmdmyyhhhhhhhyo++o/+///+ohhso++sdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dhdmNNdsossyhmdmsydhssssyhhs/++o/o+//:++yhhy+/hNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdmNNNNmhysshddyshdyyy/oss+s::/:://++///++++/::hmNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNMNNNmmNNdymNNhshdshdyhdysh+sy+-:++osssosss++yNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNNNmdNNmNmmmNmyyddyyhdhydyohys/-oo+osssysyyohNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNhdNmmNNmNMMNhyyhhhdhyyhmmyh+-/s+sysssyyhyydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mNMMMhdNdmMNMMMMMNNmdhdddmhdmmNho/-osoyyo++oyddhhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NMMMNmhNdNMNMNMMNmNNNmmmdyoohmhoyo::hsooo++oooydhymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNhmNNMmmNMNNmmmmdmmdyhhoyddddoo++yoyysooossyhsmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNmmNNNmdNdNmmddhhhdNNhsmNssdooo/dso++osyyysoymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMNNNNmNNNNNmddmmNhshNmmmNmNMdhNsh/ohho++/:++MMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MNNNMMNNNNmmmhhhhdyosdNmdmMMhoNmhdmys+ooo++/+MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNMMNNNNmddmdoodmMMNmmNNhssdmNMMMNdNd/osomMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNdhMNmNNMNmdNddohmMMNNNmdmdddNMMMMMMMMmMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNhmMmmmmNNmdNyoNMNmNmdhyyyhdhoyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdmMmmddddNmmdys+hmMMMmmhysssyy++dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdNMMdmdddmmNNyshmNNNNNNNdhhs+yy//dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMMdmdddmmMNysdmNNMMMNhhNdhs+y+/:mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNhmmddNNNMdyydmMMMNdyshNhyoss+:/MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMddmmmmNMNMNdsymNNmdhhdNMNdhsss+:yMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMdhmmmmmNMNNMmshNMMMmmMMMMMmNdyo+//NMMMMMMMMMMMMMMMhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMmhmmmmmmNMMNNMyshdhhhyhNMMMMMMdhso+sMMMMMMMMMMMMMMMhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMmdmmmmmmmNMMMmNm+ys++oyyNMMMMMMNmmyyoyNMMMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmmmmmmmmmmNMNNmNNyyo+/oohNMMMMMMMMdhhsshmMMMMMMMMMMMyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNNNNmmmmNMMNmmddNmmdhhdmMMMMMMMMMNddhssshmmNNNmmdhdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNNNNNNNNNNNNNNNmNNNNMMMMMNomMMMMMMMMMNNmdhhyyyyyyyhdmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nd+oNMMMMMMMmodo++++++++++m..yNMMMMMNo+mNMMmhssshdNMMNhNMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MN+ /NMMMMMm: d` -ssssss+`d. `+mMMMMN. dNm+:+syso//hNN--yNMMMMMMMd+`yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMN+ /NMMMm: oM` +NMMMMMNdN. /`.yNMMN. dh.omMMMMMNy.oM- `:hNMMMm+.  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMN/ /NMm: oNy` :sssmMMMMN. dh-`/mMN. d-/NMMMMMMMMy`m- y/`/dmo..o: yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMN/ /m: +NNy. /yyyNMMMMN. dNNo`.yN- d.oNMMMMMMMMd d- mNh-`.`+mN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMN/ . +NMMN- oNMMMMMNdN. dMMMd:`/. ds.dNMMMMMMm::M- dMMNy/dMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMN/ +NMMMN- /yyyyyys d. dMMMMNo`  dNy-+ymmmho-+NN- dMMMMMMMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMNyNMMMMN+::::::::::m+/mMMMMMMd: dMMNho///+ymMMN+/mMMMMMMMMNs/hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNsmMMMMMMMMMMMMMMNNNNMMNNNMMNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
var fs_1 = require("fs");
var latest_version_1 = require("latest-version");
var whatsapp_1 = require("../api/whatsapp");
var create_config_1 = require("../config/create-config");
var semver_1 = require("../utils/semver");
var auth_1 = require("./auth");
var browser_1 = require("./browser");
var chalk = require("chalk");
var boxen = require("boxen");
var Spinnies = require("spinnies");
var path = require("path");
var Counter = require("../lib/counter/Counter.js");
var version = require('../../package.json').version;
var helpers_1 = require("../api/helpers");
// Global
var updatesChecked = false;
var counter = new Counter();
function create(session, catchQR, statusFind, options) {
    if (session === void 0) { session = 'session'; }
    return __awaiter(this, void 0, void 0, function () {
        var browserFail, browser_fail, browser_check, closeBrowser, spinnies, mergedOptions, browser, waPage, authenticated_1, tipo_qr_1, result_1, url_1, IsLog, localStorage_1, _a, _b, WABrowserId_1, WASecretBundle_1, WAToken1_1, WAToken2_1, debugURL;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    browserFail = false;
                    spinnies = new Spinnies({
                        disableSpins: options ? options.disableSpins : '',
                    });
                    mergedOptions = __assign(__assign({}, create_config_1.defaultOptions), options);
                    if (!mergedOptions.disableWelcome) {
                        console.log("\n\n     \n    \u2590\u2588  \u2588\u2588  \u2588\u2591\u2590\u2588\u2580\u2580\u2580\u2591\u2590\u2588     \u2584\u2588\u2580\u2580\u2588\u2584 \u2584\u2588\u2580\u2580\u2588\u2584 \u2590\u2588\u2588   \u2588\u2588\u258C \u2593\u2588\u2580\u2580\u2580\u2591\n     \u2588\u258C\u2590\u2588\u2588\u2584\u2593\u2588 \u2590\u2588\u2584\u2584\u2584 \u2590\u2588    \u2590\u2588      \u2588\u2592  \u2590\u2588\u2584\u2590\u2588\u2580\u258C \u2590\u258C\u2588\u258C \u2593\u2588\u2584\u2584\u2584\n     \u2590\u2588\u2588 \u2590\u2588\u2588\u2591 \u2590\u2588    \u2590\u2588    \u2590\u2588\u2584  \u2584\u2580 \u2588\u258C  \u2590\u2588 \u2590\u2588 \u2588\u2593\u2588 \u2588\u258C \u2588\u2588\n      \u2580\u2580  \u2580\u2580  \u2580\u2580\u2580\u2580\u2580\u2591\u2590\u2580\u2580\u2580\u2580\u2580  \u2580\u2580\u2580\u2580   \u2580\u2580\u2580\u2580  \u2590\u2580  \u2580  \u2580\u2580 \u2580\u2580\u2580\u2580\u2580\n    \n\n                                   \u2584\n      \u2584\u2584\u2591          \u2584 \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 \u2588\u2588         \u2584\u2584       \u2584\u2584\u2584\u2584      \u2591\n      \u2591\u2588\u2588\u2584        \u2588\u2588 \u2588\u2588\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2588\u258C \u2588\u2588\u2588\u258C       \u2588\u2588\u2584  \u2584\u2584\u2588\u2580\u2580\u2580\u2580\u2580\u2580\u2588\u2584   \u2593\u2588\u2584           \u2584\u2588\u2591\n       \u2591\u2588\u2588\u2584     \u2591\u2588\u2588\u2580 \u2588\u2588\u2588           \u2588\u2588\u2580\u2588\u2588\u2584     \u2588\u2588\u2584 \u2584\u2588\u2591        \u2580\u2588\u2584 \u2593\u2588\u2588\u2588\u2584      \u2591\u2588\u2588\u2588\u2588\u2591\n         \u2588\u2588\u258C   \u2584\u2588\u2588\u2591 \u2584\u2588\u2588\u2588\u2584\u2584\u2584\u2584       \u2588\u2588  \u2593\u2588\u2588\u2584   \u2588\u2588\u2584\u2590\u2588           \u2590\u2588 \u2593\u2588\u258C\u2580\u2588\u2588\u2584  \u2584\u2588\u2588\u2588\u2591\u2588\u2588\u2591\n          \u2588\u2588\u258C \u2584\u2588\u2588\u2591  \u2580\u2588\u2588\u2588\u2580\u2580\u2580\u2580       \u2588\u2588   \u2590\u2588\u2588\u258C  \u2588\u2588\u2584\u2590\u2588           \u2590\u2588\u2591\u2593\u2588\u258C  \u2580\u2588\u2588\u2588\u2588\u2588\u2591  \u2588\u2588\u2591\n           \u2593\u2588\u2588\u2588\u2588     \u2588\u2588\u2588           \u2588\u2588     \u2580\u2588\u2588\u2584\u2588\u2588\u2584 \u2588\u258C          \u2588\u2588 \u2593\u2588\u258C    \u2580\u2588\u2591    \u2588\u2588\u2591\n            \u2580\u2588\u2588      \u2588\u2588\u2588        \u2588\u258C \u2588\u2588       \u2580\u2588\u2588\u2588\u2584  \u2580\u2588\u2584     \u2584\u2584\u2588\u2580  \u2593\u2588\u258C           \u2588\u2588\u2591\n             \u2580       \u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258C \u2588\u2588        \u2591\u2588\u2588\u2584    \u2580\u2580\u2588\u2588\u2588\u2580\u2580\u2591    \u2580\u2588\u258C           \u2593\u2588\u2591\n                                               \u2580\u2591                             \n    \n");
                    }
                    // Check for updates if needed
                    if (!updatesChecked && mergedOptions.updatesLog) {
                        spinnies.add('venom-version-spinner', {
                            text: 'Verificando atualizações',
                        });
                        checkVenomVersion(spinnies);
                        updatesChecked = true;
                    }
                    // Initialize whatsapp
                    spinnies.add(session + "-auth", {
                        text: 'Esperando...',
                    });
                    return [4 /*yield*/, browser_1.initBrowser(session, mergedOptions)];
                case 1:
                    browser = _c.sent();
                    if (!(browser != null)) return [3 /*break*/, 12];
                    spinnies.add("browser", {
                        text: 'verificando headless',
                    });
                    if (mergedOptions.headless) {
                        spinnies.succeed("browser", {
                            text: 'opção headless está ativa, navegador oculto',
                        });
                    }
                    else {
                        spinnies.succeed("browser", {
                            text: 'opção headless não está ativa, navegador visivel',
                        });
                    }
                    browser['_process'].once('close', function () {
                        browser['isClose'] = true;
                    });
                    browser_fail = setInterval(function () {
                        if (browser['isClose'] != undefined) {
                            spinnies.fail(session + "-auth", {
                                text: 'O navegador está fechado',
                            });
                            browserFail = true;
                            if (statusFind) {
                                statusFind('browserClose');
                            }
                            clearTimeout(closeBrowser);
                            clearInterval(browser_fail);
                        }
                    }, 1000);
                    return [4 /*yield*/, browser_1.initWhatsapp(session, mergedOptions, browser)];
                case 2:
                    waPage = _c.sent();
                    if (!waPage) return [3 /*break*/, 12];
                    spinnies.update(session + "-auth", { text: 'Autenticando...' });
                    authenticated_1 = null;
                    return [4 /*yield*/, auth_1.isAuthenticated(waPage)
                        .then(function (e) {
                            authenticated_1 = e;
                        })
                        .catch(function () { })];
                case 3:
                    _c.sent();
                    if (!(authenticated_1 != null)) return [3 /*break*/, 12];
                    if (!authenticated_1) return [3 /*break*/, 5];
                    // Wait til inside chat
                    if (statusFind) {
                        statusFind('isLogged');
                    }
                    return [4 /*yield*/, auth_1.isInsideChat(waPage).toPromise()];
                case 4:
                    _c.sent();
                    spinnies.succeed(session + "-auth", { text: 'Autenticado' });
                    return [3 /*break*/, 8];
                case 5:
                    if (statusFind) {
                        statusFind('notLogged');
                    }
                    spinnies.add("autoclose", { text: 'verificando autoClose' });
                    if (mergedOptions.autoClose > 0) {
                        spinnies.succeed("autoclose", {
                            text: 'a função autoClose está ativa',
                        });
                        closeBrowser = setTimeout(function () {
                            browserFail = true;
                            browser.close();
                            if (statusFind) {
                                statusFind('autocloseCalled');
                            }
                            clearInterval(browser_check);
                        }, mergedOptions.autoClose);
                    }
                    else {
                        spinnies.succeed("autoclose", {
                            text: 'a função autoClose está desativada ',
                        });
                    }
                    tipo_qr_1 = 0, result_1 = undefined, url_1 = null;
                    browser_check = setInterval(function () {
                        return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, data, asciiQR, re, _c, data, asciiQR;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        if (!(browser['isClose'] != undefined)) return [3 /*break*/, 1];
                                        if (statusFind) {
                                            statusFind('qrReadFail');
                                        }
                                        browserFail = true;
                                        clearTimeout(closeBrowser);
                                        clearInterval(browser_check);
                                        return [3 /*break*/, 13];
                                    case 1:
                                        _a = tipo_qr_1;
                                        switch (_a) {
                                            case 0: return [3 /*break*/, 2];
                                            case 1: return [3 /*break*/, 7];
                                        }
                                        return [3 /*break*/, 13];
                                    case 2: return [4 /*yield*/, helpers_1.scrapeImg(waPage).catch(function () { })];
                                    case 3:
                                        result_1 = _d.sent();
                                        if (!(result_1 != undefined)) return [3 /*break*/, 6];
                                        return [4 /*yield*/, auth_1.retrieveQR(waPage)];
                                    case 4:
                                        _b = _d.sent(), data = _b.data, asciiQR = _b.asciiQR;
                                        if (catchQR) {
                                            catchQR(data, asciiQR);
                                        }
                                        return [4 /*yield*/, auth_1.asciiQr(result_1['url'])
                                            .then(function (qr) {
                                                if (mergedOptions.logQR) {
                                                    spinnies.update(session + "-auth", {
                                                        text: 'Digitalize o QR para a sessão: ' + session,
                                                    });
                                                    console.log(qr);
                                                }
                                                tipo_qr_1++;
                                            })
                                            .catch(function () { })];
                                    case 5:
                                        _d.sent();
                                        _d.label = 6;
                                    case 6: return [3 /*break*/, 13];
                                    case 7: return [4 /*yield*/, helpers_1.scrapeImgReload(waPage, url_1).catch(function () { })];
                                    case 8:
                                        result_1 = _d.sent();
                                        if (typeof result_1 === 'object') {
                                            url_1 = result_1.url;
                                        }
                                        if (!(typeof result_1 === 'object' && result_1.status === true)) return [3 /*break*/, 12];
                                        return [4 /*yield*/, helpers_1.scrapeImg(waPage).catch(function () { })];
                                    case 9:
                                        re = _d.sent();
                                        if (!(re != undefined)) return [3 /*break*/, 12];
                                        return [4 /*yield*/, auth_1.retrieveQR(waPage)];
                                    case 10:
                                        _c = _d.sent(), data = _c.data, asciiQR = _c.asciiQR;
                                        if (catchQR) {
                                            catchQR(data, asciiQR);
                                        }
                                        return [4 /*yield*/, auth_1.asciiQr(re['url'])
                                            .then(function (qr) {
                                                if (mergedOptions.logQR) {
                                                    spinnies.update(session + "-auth", {
                                                        text: 'Digitalize o QR para a sessão: ' + session,
                                                    });
                                                    console.log(qr);
                                                }
                                            })
                                            .catch(function () { })];
                                    case 11:
                                        _d.sent();
                                        _d.label = 12;
                                    case 12: return [3 /*break*/, 13];
                                    case 13: return [2 /*return*/];
                                }
                            });
                        });
                    }, 1000);
                    if (!!browserFail) return [3 /*break*/, 7];
                    return [4 /*yield*/, auth_1.isInsideChat(waPage).toPromise()];
                case 6:
                    IsLog = _c.sent();
                    if (IsLog == false) {
                        throw 'O navegador está fechado';
                    }
                    if (statusFind) {
                        statusFind('qrReadSuccess');
                    }
                    spinnies.succeed(session + "-auth", {
                        text: 'Compilação de mutação',
                    });
                    return [3 /*break*/, 8];
                case 7: throw 'Falha do navegador';
                case 8:
                    if (!!browserFail) return [3 /*break*/, 12];
                    clearInterval(browser_fail);
                    clearInterval(browser_check);
                    clearTimeout(closeBrowser);
                    spinnies.add(session + "-inject", { text: 'Injetando Sibionte...' });
                    return [4 /*yield*/, browser_1.injectApi(waPage)];
                case 9:
                    waPage = _c.sent();
                    spinnies.succeed(session + "-inject", {
                        text: 'Começando com sucesso!',
                    });
                    // Saving Token
                    spinnies.add(session + "-inject", { text: 'Salvando Token...' });
                    if (!true) return [3 /*break*/, 11];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, waPage.evaluate(function () {
                        return JSON.stringify(window.localStorage);
                    })];
                case 10:
                    localStorage_1 = _b.apply(_a, [_c.sent()]);
                    WABrowserId_1 = localStorage_1.WABrowserId, WASecretBundle_1 = localStorage_1.WASecretBundle, WAToken1_1 = localStorage_1.WAToken1, WAToken2_1 = localStorage_1.WAToken2;
                    try {
                        setTimeout(function () {
                            fs_1.mkdir(path.join(path.resolve(process.cwd() + mergedOptions.mkdirFolderToken, mergedOptions.folderNameToken)), { recursive: true }, function (err) {
                                if (err) {
                                    spinnies.fail(session + "-inject", {
                                        text: 'Falha ao criar pasta do tokens...',
                                    });
                                }
                            });
                        }, 200);
                        setTimeout(function () {
                            fs_1.writeFileSync(path.join(path.resolve(process.cwd() + mergedOptions.mkdirFolderToken, mergedOptions.folderNameToken), session + ".data.json"), JSON.stringify({
                                WABrowserId: WABrowserId_1,
                                WASecretBundle: WASecretBundle_1,
                                WAToken1: WAToken1_1,
                                WAToken2: WAToken2_1,
                            }));
                            spinnies.succeed(session + "-inject", {
                                text: 'Token salvo com sucesso...',
                            });
                        }, 500);
                    }
                    catch (error) {
                        spinnies.fail(session + "-inject", {
                            text: 'Falha ao salvar token...',
                        });
                    }
                    _c.label = 11;
                case 11:
                    if (mergedOptions.debug) {
                        debugURL = "http://localhost:" + fs_1.readFileSync("./" + session + "/DevToolsActivePort").slice(0, -54);
                        console.log("\nDebug: \u001B[34m" + debugURL + "\u001B[0m");
                    }
                    return [2 /*return*/, new whatsapp_1.Whatsapp(waPage)];
                case 12: return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
/**
 * Checs for a new versoin of venom and logs
 */
function checkVenomVersion(spinnies) {
    latest_version_1.default('venom-bot').then(function (latest) {
        if (!semver_1.upToDate(version, latest)) {
            logUpdateAvailable(version, latest);
        }
        spinnies.succeed('venom-version-spinner', { text: 'Verificando atualizações' });
    });
}
/**
 * Logs a boxen of instructions to update
 * @param current
 * @param latest
 */
function logUpdateAvailable(current, latest) {
    // prettier-ignore
    var newVersionLog = "Existe uma nova versão de " + chalk.bold("Venom") + " " + chalk.gray(current) + " \u279C  " + chalk.bold.green(latest) + "\n" +
        "Atualize seu pacote executando:\n\n" +
        (chalk.bold('\>') + " " + chalk.blueBright('npm update venom-bot'));
    console.log(boxen(newVersionLog, { padding: 1 }));
    console.log("Para mais informações visite: " + chalk.underline('https://github.com/orkestral/venom/blob/master/UPDATES.md') + "\n");
}

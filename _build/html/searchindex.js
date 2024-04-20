Search.setIndex({"docnames": ["Ch_1/240419_PointLineSource", "Ch_1/Planck_240315", "Ch_1/RadProp_240411", "Ch_1/SolidAngle_240405", "Intro_Licht", "intro", "range_slider"], "filenames": ["Ch_1\\240419_PointLineSource.ipynb", "Ch_1\\Planck_240315.ipynb", "Ch_1\\RadProp_240411.ipynb", "Ch_1\\SolidAngle_240405.ipynb", "Intro_Licht.ipynb", "intro.md", "range_slider.ipynb"], "titles": ["Point and line light souces", "Planck\u2019s law", "Photometric Quantities", "Solid angle", "Light- and Daylighting", "Welcome to my Live Scripts", "Thresholding an Image with RangeSlider"], "terms": {"load": [1, 4], "packag": [0, 1, 2], "import": [0, 1, 2, 3, 4, 6], "numpi": [0, 1, 2, 3, 6], "np": [0, 1, 2, 3, 6], "matplotlib": [0, 1, 2, 3, 6], "pyplot": [0, 1, 2, 3, 6], "plt": [0, 1, 2, 3, 6], "from": [0, 1, 2, 3, 6], "scipi": [0, 1, 2], "interpol": [0, 1, 2], "interp1d": 1, "sy": 1, "print": 1, "execut": 1, "which": [0, 1, 3], "environ": 1, "us": [1, 2, 3, 6], "c": [1, 6], "user": 1, "beck": 1, "miniforge3": [0, 1, 2], "env": [0, 1, 2], "jubook": [0, 1, 2], "python": 1, "ex": 1, "def": [0, 1, 2, 6], "lam": 1, "t": [0, 1, 2], "function": [1, 6], "physikalisch": [], "gr\u00f6\u00dfen": [], "all": [0, 1], "si": 1, "einheiten": [], "w": 1, "m": [1, 2, 3], "k": [1, 6], "h": [0, 1, 2, 3], "6": 1, "626e": 1, "34": 1, "plancksch": 1, "wirkungsquantum": 1, "3e8": 1, "lichtgeschwindigkeit": [], "1": [0, 1, 2, 3, 6], "38e": 1, "23": 1, "boltzmann": 1, "konstant": 1, "c1": 1, "2": [0, 1, 2, 3, 6], "pi": [0, 1, 2, 3], "c2": 1, "i_lam": 1, "5": [0, 1, 2, 6], "exp": 1, "spektral": [], "strahlungsflussdicht": [], "return": [0, 1, 2, 6], "min_l": 1, "200e": 1, "9": [0, 1, 2], "max_l": 1, "3000e": 1, "dl": [0, 1], "5e": 1, "nl": 1, "int": [0, 1, 2], "linspac": [0, 1, 2, 3, 6], "5800": 1, "i": [0, 1], "fig": [0, 1, 2, 6], "figur": [0, 1, 2, 3, 6], "figsiz": [0, 1, 2, 3, 6], "13": [0, 1, 2], "3": [0, 1, 2, 3, 6], "titl": [0, 1, 2], "spectral": 1, "solar": [], "radiat": [0, 1], "densiti": 1, "str": [0, 1, 2], "xlabel": [0, 1, 2, 3], "lambda": 1, "nm": 1, "ylabel": [0, 1, 2, 3], "m\u00b2": [1, 2], "plot": [0, 1, 2, 3, 6], "1e9": 1, "grid": [1, 2, 3, 6], "show": [0, 1, 2, 3, 6], "wavelength": 1, "maximum": 1, "power": 1, "r_": 1, "393": 1, "1e6": 1, "radiu": 1, "sun": 1, "r_se": 1, "149597870": 1, "mean": 1, "distanc": [1, 2, 3], "earth": 1, "lambda_max": 1, "round": 1, "argmax": 1, "constant": 1, "sum": [0, 1], "0": [0, 1, 2, 3, 6], "500": 1, "1355": 1, "due": [1, 4], "old": 1, "din": 1, "relat": 1, "555": [0, 1, 2], "v": [0, 1, 2], "arrai": 1, "039": 1, "064": 1, "12": [1, 3], "217": 1, "396": 1, "64": 1, "21": 1, "18": 1, "4": [0, 1, 2, 3, 6], "7": [1, 6], "11": [1, 3], "16": 1, "84": 1, "29": 1, "8": 1, "38": 1, "48": 1, "60": [1, 2, 6], "73": 1, "90": 1, "112": 1, "139": 1, "169": 1, "208": 1, "258": 1, "323": 1, "407": 1, "503": 1, "608": 1, "710": 1, "793": 1, "862": 1, "915": 1, "954": 1, "980": 1, "995": 1, "1000": [0, 1], "979": 1, "952": 1, "870": 1, "816": 1, "757": 1, "695": 1, "631": 1, "567": 1, "441": 1, "381": 1, "321": 1, "265": 1, "175": 1, "138": 1, "107": 1, "81": 1, "61": 1, "44": 1, "32": 1, "17": 1, "72": 1, "10": [0, 1, 2, 6], "93": 1, "09": 1, "05": [1, 3], "74": 1, "52": 1, "36": [0, 1], "249": 1, "172": 1, "0848": 1, "06": 1, "042": 1, "03": [1, 6], "021": 1, "015": 1, "1e": [1, 2], "n": [1, 6], "len": [0, 1, 2], "lam_": 1, "380": 1, "780": 1, "max": [1, 2, 6], "color": [0, 1, 2, 6], "orang": 1, "g": 1, "sensit": 1, "definit": 1, "eta": 1, "frac": [0, 1, 2, 3], "int_0": [1, 2, 3], "infti": [1, 3], "d": [0, 1, 2, 3], "we": [0, 2], "first": 1, "creat": [1, 6], "two": [1, 2], "respect": [1, 2, 3], "fint_i": 1, "kind": 1, "linear": [0, 1], "fint_v": 1, "fill_valu": 1, "extrapol": 1, "100": [0, 1, 2], "14": 1, "The": [0, 1, 2, 3, 4, 6], "aim": 4, "thi": [0, 1, 2, 3, 4, 6], "lectur": 4, "familiaris": 4, "student": 4, "physic": 4, "great": 4, "human": 4, "percept": 4, "feel": 4, "comfort": 4, "man": 4, "an": [0, 2, 3, 4], "ey": 4, "being": [0, 4], "although": 4, "energi": 4, "requir": [2, 4], "ar": [2, 4], "secondari": 4, "residenti": 4, "sector": 4, "thei": 4, "plai": 4, "signific": 4, "role": 4, "offic": 4, "It": 4, "add": [0, 4], "cool": 4, "especi": 4, "summer": 4, "calcul": [0, 2, 3, 4], "illumin": [0, 2, 4], "level": [0, 2, 4], "lumin": [0, 2, 4], "distribut": [0, 2, 4], "glare": [2, 4], "room": [0, 2, 3, 4], "demand": 4, "save": 4, "light": 5, "daylight": [2, 3, 5], "attributeerror": [], "traceback": [0, 1, 2, 6], "most": [0, 1, 2, 6], "recent": [0, 1, 2, 6], "call": [0, 1, 2, 6], "last": [0, 1, 2, 6], "appdata": [0, 1, 2, 6], "local": [0, 1, 2, 6], "temp": [0, 1, 2, 6], "ipykernel_41156": [], "1204385265": [], "py": [0, 1, 2, 6], "modul": [0, 1, 2, 6], "ha": [], "attribut": 6, "astro24": [], "content": 1, "current": 1, "page": 1, "can": [1, 2, 3, 6], "download": 1, "here": 1, "To": [0, 1, 3], "notebook": 1, "press": 1, "rocket": 1, "button": 1, "quantiti": [1, 5], "unit": 1, "veloc": 1, "flux": [1, 2], "label": 1, "black": 1, "bodi": 1, "legend": 1, "how": [1, 2], "do": 1, "atmospher": 1, "chang": [1, 6], "spectrum": [], "read": 1, "instanc": [0, 1, 2], "rayleigh": 1, "what": [0, 1, 2], "characterist": [0, 1], "scatter": 1, "should": [1, 2], "incorpor": 1, "abov": [0, 1, 2], "equat": 1, "where": [0, 1, 2, 3], "tungsten": 1, "lamp": 1, "oper": 1, "2800": 1, "jupyt": 1, "version": 1, "planck": 5, "s": [0, 2, 3, 5, 6], "law": 5, "size": 1, "1100x300": 1, "ax": [0, 1, 2, 6], "widget": [1, 6], "rangeslid": 1, "gener": [1, 2, 6], "fake": [1, 6], "imag": [0, 1, 2, 3], "random": [1, 6], "seed": [1, 6], "19680801": [1, 6], "128": [1, 6], "img": [1, 6], "randn": [1, 6], "subplot": [1, 6], "subplots_adjust": [1, 6], "bottom": [1, 6], "25": [1, 6], "im": [0, 1, 2, 6], "imshow": [0, 1, 2, 6], "hist": [1, 6], "flatten": [1, 6], "bin": [1, 6], "auto": [1, 6], "set_titl": [1, 6], "histogram": [1, 6], "pixel": [1, 6], "intens": [0, 1, 6], "slider_ax": [1, 6], "add_ax": [1, 6], "20": [0, 1, 6], "slider": [1, 6], "threshold": 1, "min": [1, 3, 6], "vertic": [1, 6], "line": [1, 5, 6], "lower_limit_lin": [1, 6], "axvlin": [1, 6], "val": [1, 6], "upper_limit_lin": [1, 6], "updat": [1, 6], "pass": [1, 6], "callback": [1, 6], "tupl": [1, 6], "colormap": [0, 1, 2, 6], "norm": [0, 1, 2, 6], "vmin": [0, 1, 2, 6], "vmax": [0, 1, 2, 6], "posit": [0, 1, 6], "set_xdata": [1, 6], "redraw": [1, 6], "ensur": [1, 6], "canva": [1, 6], "draw_idl": [1, 6], "on_chang": [1, 6], "ipympl": [1, 6], "ipywidget": [1, 6], "30000": 1, "300": [1, 2], "add_subplot": [1, 6], "set_ylim": 1, "1e14": 1, "set_xlim": 1, "100e": 1, "30000e": 1, "set_yscal": 1, "log": [1, 2], "set_xscal": 1, "set_ydata": [1, 6], "interact": [1, 6], "6000": 1, "1e2": 1, "200": 1, "3000": 1, "400e": 1, "700e": 1, "02": 1, "0005": 1, "0069": 1, "0122": 1, "0145": [], "0177": [], "0235": [], "0268": [], "0294": [], "0343": [], "0339": [], "0326": [], "0318": [], "0321": [], "0312": [], "0289": [], "0280": [], "0273": [], "0246": [], "0237": [], "0220": [], "0230": [], "0199": [], "0211": [], "0330": [], "0453": [], "0381": [], "0329": [], "0306": [], "0185": [], "0136": [], "0210": [], "0166": [], "0042": [], "0010": [], "0044": [], "0095": [], "0123": [], "0110": [], "0106": [], "0093": [], "0068": [], "0024": [], "0002": [], "0012": [], "0030": [], "0037": [], "0057": [], "0066": [], "0060": [], "0041": [], "0006": [], "file": [], "ipykernel_35040": [], "3436147894": [], "syntaxerror": [], "invalid": [], "syntax": [], "ipython": [0, 2, 3], "displai": [0, 2, 3, 6], "chapter": 3, "deal": 3, "omega": [0, 2, 3], "vec": 3, "e_r": 3, "da": [2, 3], "r": [0, 1, 2, 3], "surfac": [2, 3], "element": 3, "consid": 3, "For": 3, "infinitesim": 3, "small": 3, "sphere": 3, "you": [2, 3], "get": 3, "text": [0, 2, 3], "sin": 3, "theta": [0, 3], "varphi": 3, "latitud": 3, "longitud": 3, "motiv": 3, "shade": [2, 3], "neighbour": 3, "build": 3, "follow": [0, 2, 3, 6], "sketch": [0, 2, 3], "section": [0, 3], "through": 3, "street": 3, "observ": [3, 6], "see": [2, 3, 6], "open": 3, "sky": [2, 3], "omega_": 3, "point": [3, 5], "simplifi": 3, "matter": 3, "assum": 3, "road": 3, "veri": 3, "long": 3, "l": [1, 2, 3], "gg": 3, "raumwinkel_strassenzug": 3, "jpg": 3, "defin": [0, 3, 6], "suitabl": 3, "coordin": [0, 3], "system": 3, "deriv": [0, 3], "integr": [0, 3], "int_": [2, 3], "dx": 3, "dy": 3, "x": [0, 1, 2, 3, 6], "y": [0, 2, 3], "solv": 3, "result": [2, 3], "valid": 3, "theta_0": 3, "tan": [], "vari": [2, 3], "storei": 3, "30": 3, "ylim": 3, "height": [0, 2, 3], "discuss": [2, 3], "suppli": 3, "control": 6, "similarli": 6, "major": 6, "differ": 6, "float": 6, "lower": [0, 2, 6], "upper": 6, "rather": 6, "than": [0, 6], "singl": 6, "doc": 6, "galleri": 6, "slider_demo": 6, "exampl": 6, "slider_snap_demo": 6, "have": 6, "snap": 6, "discret": 6, "valu": [1, 6], "nameerror": 6, "ipykernel_28052": 6, "1682180893": 6, "name": [0, 1, 2, 6], "admonit": 6, "refer": 6, "method": 6, "class": 6, "shown": 6, "f": [0, 2, 6], "A": [0, 1, 6], "b": [1, 2, 6], "imread": 6, "http": 6, "org": 6, "_imag": 6, "stinkbug": 6, "png": [0, 2, 6], "floatrangeslid": 6, "step": 6, "001": 6, "draw": [2, 6], "solid": [2, 5], "angl": [2, 5], "panda": 1, "df_sol": 1, "read_excel": 1, "solarnorm": 1, "xlsx": 1, "sheet_nam": 1, "employe": 1, "modulenotfounderror": 1, "ipykernel_21688": 1, "2731352093": 1, "No": 1, "head": 1, "sdlam": 1, "320": 1, "340": 1, "cubicsplin": 1, "pchipinterpol": 1, "akima1dinterpol": 1, "sol": 1, "ab": 1, "xx": [0, 1, 2], "spline": 1, "pchip": 1, "df_astm": 1, "astmg173": 1, "smarts2": 1, "e": [0, 1, 2], "globaltilt": 1, "directandcirc": 1, "280": 1, "082": 1, "730900e": 1, "536100e": 1, "26": 1, "099": 1, "230700e": 1, "091700e": 1, "24": [1, 2], "281": 1, "150": 1, "689500e": 1, "125300e": 1, "sol2": 1, "phi": [0, 2], "lm": [0, 2], "lumen": 2, "lx": 2, "lux": 2, "da_": 2, "cd": [0, 2], "candela": [0, 2], "apper": 2, "area": 2, "symmetri": 2, "condit": 2, "appli": 2, "regard": 2, "product": 2, "also": 2, "omega_2": 2, "omega_1": 2, "sao": 2, "sunlit": 2, "fa\u00e7ad": 2, "intern": 2, "venetian": 2, "blind": 2, "diffus": 2, "lambertian": 2, "transmiss": 2, "tau": 2, "wa": 2, "protect": 2, "extern": 2, "50000": 2, "relationship": 2, "exist": 2, "window2workingarea": 2, "now": [0, 2], "want": 2, "work": [0, 2], "plane": [0, 2], "p2": 2, "previou": 2, "again": 2, "purpos": 2, "locat": 2, "depend": [0, 2], "express": 2, "x_2": [0, 2], "y_2": [0, 2], "h_u": 2, "h_o": 2, "co": [0, 2], "theta_1": 2, "theta_2": [0, 2], "x_1": 2, "y_1": 2, "z_1": 2, "dz_1": 2, "dy_1": 2, "between": 2, "normal": [0, 2], "vector": 2, "z1": 2, "y1": 2, "x2": [0, 2], "y2": [0, 2], "integrand": 2, "x1": 2, "ep": 2, "total": [0, 2], "r_xy": 2, "within": 2, "xy": 2, "cos1": 2, "cos2": 2, "depth": [0, 2], "width": [0, 2], "nx": [0, 2], "ny": [0, 2], "50": 2, "discredit": 2, "res_1d": 2, "zero": [0, 2], "enumer": [0, 2], "err": 2, "dblquad": 2, "arg": [0, 2], "yy": [0, 2], "numer": 2, "overcast": 2, "rel": 2, "window": 2, "ipykernel_11620": [], "913340295": [], "22": [], "desk": 2, "place": [0, 2], "much": [0, 2], "doe": [0, 2], "high": 2, "res_2d": 2, "extent": [0, 2], "bilinear": [0, 2], "aspect": [0, 2], "origin": [0, 2], "colorbar": [0, 2], "2d": [0, 2], "arctan": 3, "photometr": 5, "keyboardinterrupt": [], "ipykernel_1096": [], "767963485": [], "lib": [0, 2], "site": [0, 2], "quadpack": [], "func": [0, 2], "gfun": [], "hfun": [], "epsab": [], "epsrel": [], "600": [], "601": [], "nquad": [], "temp_rang": [], "602": [], "opt": [], "603": [], "604": [], "rang": [], "full_output": [], "823": [], "els": [0, 2], "824": [], "callabl": [], "_optfunc": [], "825": [], "_nquad": [], "826": [], "827": [], "self": [0, 2], "kwarg": [0, 2], "878": [], "partial": [], "879": [], "quad_r": [], "quad": [], "low": [], "880": [], "881": [], "882": [], "abserr": [], "limit": [], "weight": [], "wvar": [], "wopt": [], "maxp1": [], "limlst": [], "350": [], "none": [0, 2], "351": [], "retval": [], "_quad": [], "352": [], "353": [], "354": [], "461": [0, 2], "462": [], "infbound": [], "463": [], "_quadpack": [], "_qags": [], "464": [], "465": [], "_qagi": [], "bound": [0, 2], "67338855": [], "ipykernel_32888": [], "describ": 0, "sourc": 0, "need": [0, 2], "sr": 0, "pointsourc": 0, "let": 0, "look": 0, "dot": 0, "shape": 0, "ceil": 0, "luminair": 0, "emit": 0, "homogen": 0, "half": 0, "space": 0, "like": 0, "polar": 0, "diagram": 0, "below": 0, "complet": 0, "necessari": 0, "design": 0, "phi_": 0, "pointsourceplan": 0, "e_p": 0, "xs": 0, "ys": 0, "phi_tot": 0, "spotlight": 0, "res_2d_p": 0, "ipykernel_29300": [], "149637092": [], "meshgrid": [0, 2], "arang": [0, 2], "cs": [0, 2], "contour": [0, 2], "linewidth": 0, "clabel": [0, 2], "inlin": [0, 2], "fontsiz": [0, 2], "371": 0, "570654890214": [], "5555555555555": 0, "In": 0, "one": 0, "dimens": 0, "its": 0, "smaller": 0, "length": 0, "smallest": 0, "order": 0, "think": 0, "them": 0, "made": 0, "up": 0, "mani": 0, "after": 0, "obtain": 0, "e_": 0, "ls": 0, "x_": 0, "sqrt": 0, "mathop": 0, "bigg": 0, "_": 0, "y_u": 0, "y_o": 0, "specif": 0, "end": 0, "e_l": 0, "yu": 0, "yo": 0, "phi_tot_l": 0, "per": 0, "part_o": 0, "part_u": 0, "res_2d_l": 0, "1760": 0, "detph": 0, "anoth": 0, "code": 0, "3200": 2, "ipykernel_23684": [], "2105906606": [], "19": [], "59": 2, "0338983050847457": 2, "41": 2, "745421764866805": 2, "1159": 2, "8066522448398": 2, "souc": 5, "typeerror": [0, 2], "ipykernel_31072": [], "2532634046": 0, "_api": [0, 2], "deprec": [0, 2], "wrapper": [0, 2], "457": [0, 2], "paramet": [0, 2], "becom": [0, 2], "keyword": [0, 2], "onli": [0, 2], "remov": [0, 2], "458": [0, 2], "obj_typ": [0, 2], "__name__": [0, 2], "459": [0, 2], "460": [0, 2], "don": [0, 2], "modifi": [0, 2], "signatur": [0, 2], "boilerpl": [0, 2], "cmap": [0, 2], "alpha": [0, 2], "interpolation_stag": [0, 2], "filternorm": [0, 2], "filterrad": [0, 2], "resampl": [0, 2], "url": [0, 2], "data": [0, 2], "2655": [0, 2], "2656": [0, 2], "2657": [0, 2], "2658": [0, 2], "sci": [0, 2], "__ret": [0, 2], "2659": [0, 2], "__init__": [0, 2], "inner": [0, 2], "1412": [0, 2], "1413": [0, 2], "1414": [0, 2], "map": [0, 2], "sanitize_sequ": [0, 2], "1415": [0, 2], "1416": [0, 2], "new_sig": [0, 2], "bind": [0, 2], "_ax": [0, 2], "5483": [0, 2], "5484": [0, 2], "5485": [0, 2], "5486": [0, 2], "5487": [0, 2], "set_data": [0, 2], "937": [0, 2], "938": [0, 2], "939": [0, 2], "940": [0, 2], "941": [0, 2], "244": [0, 2], "245": [0, 2], "martist": [0, 2], "artist": [0, 2], "246": [0, 2], "cm": [0, 2], "scalarmapp": [0, 2], "247": [0, 2], "248": [0, 2], "mpl": [0, 2], "rcparam": [0, 2], "355": [0, 2], "_a": [0, 2], "356": [0, 2], "_norm": [0, 2], "so": [0, 2], "setter": [0, 2], "know": [0, 2], "re": [0, 2], "initi": [0, 2], "357": [0, 2], "set_norm": [0, 2], "358": [0, 2], "359": [0, 2], "set_cmap": [0, 2], "587": [0, 2], "default": [0, 2], "588": [0, 2], "589": [0, 2], "590": [0, 2], "591": [0, 2], "autoscal": [0, 2], "556": [0, 2], "557": [0, 2], "check_isinst": [0, 2], "558": [0, 2], "559": [0, 2], "_type": [0, 2], "96": [0, 2], "join": [0, 2], "97": [0, 2], "98": [0, 2], "type_nam": [0, 2], "type": [0, 2], "99": [0, 2], "must": [0, 2], "5706548902139": 0, "ipykernel_12680": [], "1509652817": 2, "ipykernel_25604": 0, "ipykernel_26620": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"planck": 1, "s": 1, "law": 1, "sensiv": 1, "curv": 1, "human": 1, "ey": 1, "brightli": 1, "adapt": 1, "light": [0, 1, 4], "effici": 1, "daylight": 4, "motiv": 4, "skill": 4, "acquir": 4, "welcom": 5, "my": 5, "live": 5, "script": 5, "question": [0, 1, 2], "now": 1, "we": 1, "want": 1, "determin": 1, "energi": 1, "part": 1, "solar": 1, "spectrum": 1, "solid": 3, "angl": 3, "definit": 3, "exercis": 3, "instruct": 3, "threshold": 6, "an": 6, "imag": 6, "rangeslid": 6, "photometr": 2, "quantiti": 2, "solv": 2, "doubl": 2, "integr": 2, "point": 0, "line": 0, "souc": 0, "preliminari": 0, "consider": 0, "result": 0, "linesourc": 0, "task": 0}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})
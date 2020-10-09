(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{187:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(9),i=(t(0),t(298)),o={id:"racerd",title:"Infer : RacerD"},s={id:"version-0.17.0/racerd",isDocsHomePage:!1,title:"Infer : RacerD",description:"RacerD finds data races in your Java code. This page gives a more in-depth",source:"@site/versioned_docs/version-0.17.0/01-racerd.md",permalink:"/docs/0.17.0/racerd",version:"0.17.0",sidebar:"version-0.17.0/docs",previous:{title:"Infer : AL",permalink:"/docs/0.17.0/linters"},next:{title:"Infer : Experimental Checkers",permalink:"/docs/0.17.0/experimental-checkers"},latestVersionMainDocPermalink:"/docs/getting-started"},c=[{value:"Background",id:"background",children:[]},{value:"Triggering the analysis",id:"triggering-the-analysis",children:[]},{value:"Warnings",id:"warnings",children:[{value:"Unprotected write",id:"unprotected-write",children:[]},{value:"Read/Write Race",id:"readwrite-race",children:[]},{value:"Interface not thread-safe",id:"interface-not-thread-safe",children:[]}]},{value:"Annotations to help RacerD understand your code",id:"annotations-to-help-racerd-understand-your-code",children:[{value:"<code>@ThreadConfined</code>",id:"threadconfined",children:[]},{value:"<code>@Functional</code>",id:"functional",children:[]},{value:"<code>@ReturnsOwnership</code>",id:"returnsownership",children:[]},{value:"<code>@VisibleForTesting</code>",id:"visiblefortesting",children:[]}]},{value:'<a name="interprocedural"></a> Interprocedural Reasoning',id:"interprocedural-reasoning",children:[]},{value:'<a name="context"></a> Context and Selected Related Work',id:"context-and-selected-related-work",children:[]},{value:"Limitations",id:"limitations",children:[]}],l={rightToc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RacerD finds data races in your Java code. This page gives a more in-depth\nexplanation of how the analysis works, but may be less complete than the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/checkers-bug-types#thread-safety-violation"}),"Thread Safety Violation bug description page"),"."),Object(i.b)("p",null,"To run the analysis, you can use plain ",Object(i.b)("inlineCode",{parentName:"p"},"infer")," (to run RacerD along with other\nanalyses that are run by default) or ",Object(i.b)("inlineCode",{parentName:"p"},"infer --racerd-only")," (to run only RacerD)."),Object(i.b)("p",null,"For example, the command ",Object(i.b)("inlineCode",{parentName:"p"},"infer --racerd-only -- javac File.java")," will run\nRacerD on File.java."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("p",null,"RacerD statically analyzes Java code to detect potential concurrency bugs. This\nanalysis does not attempt to prove the absence of concurrency issues, rather, it\nsearches for a high-confidence class of data races. At the moment RacerD\nconcentrates on race conditions between methods in a class that is itself\nintended to be thread safe. A race condition occurs when there are two\nconcurrent accesses to a class member variable that are not separated by mutual\nexclusion, and at least one of the accesses is a write. Mutual exclusion can be\nensured by synchronization primitives such as locks, or by knowledge that both\naccesses occur on the same thread."),Object(i.b)("h2",{id:"triggering-the-analysis"},"Triggering the analysis"),Object(i.b)("p",null,"RacerD doesn't try to check ",Object(i.b)("em",{parentName:"p"},"all")," code for concurrency issues; it only looks at\ncode that it believes can run in a concurrent context. There are two signals\nthat RacerD looks for: (1) Explicitly annotating a class/method with\n",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadSafe")," and (2) using a lock via the ",Object(i.b)("inlineCode",{parentName:"p"},"synchronized")," keyword. In both\ncases, RacerD will look for concurrency issues in the code containing the signal\nand all of its dependencies. In particular, it will report races between any\nnon-",Object(i.b)("inlineCode",{parentName:"p"},"private")," methods of the same class that can peform conflicting accesses.\nAnnotating a class/interface with ",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadSafe")," also triggers checking for all\nof the subclasses of the class/implementations of the interface."),Object(i.b)("h2",{id:"warnings"},"Warnings"),Object(i.b)("p",null,"Let's take a look at the different types of concurrency issues that RacerD\nflags. Two of the warning types are data races (",Object(i.b)("inlineCode",{parentName:"p"},"Unprotected write")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"Read/write race"),"), and the third warning type encourages adding ",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadSafe"),"\nannotations to interfaces to trigger additional checking."),Object(i.b)("h3",{id:"unprotected-write"},"Unprotected write"),Object(i.b)("p",null,"RacerD will report an unprotected write when one or more writes can run in\nparallel without synchronization. These come in two flavors: (1) a self-race (a\nwrite-write race that occurs due to a method running in parallel with itself)\nand (2) two conflicting writes to the same location. Here's an example of the\nself-race flavor:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"@ThreadSafe\npublic class Dinner {\n  private int mTemperature;\n\n  public void makeDinner() {\n    boilWater();\n  }\n\n  private void boilWater() {\n    mTemperature = 100; // unprotected write.\n  }\n}\n")),Object(i.b)("p",null,"The class ",Object(i.b)("inlineCode",{parentName:"p"},"Dinner")," will generate the following report on the public method\n",Object(i.b)("inlineCode",{parentName:"p"},"makeDinner()"),":"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"There may be a Thread Safety Violation: makeDinner() indirectly writes to mTemperature outside of synchronization.")),Object(i.b)("p",null,"This warning can be fixed by synchronizing the access to ",Object(i.b)("inlineCode",{parentName:"p"},"mTemperature"),", making\n",Object(i.b)("inlineCode",{parentName:"p"},"mTemperature")," ",Object(i.b)("inlineCode",{parentName:"p"},"volatile"),", marking ",Object(i.b)("inlineCode",{parentName:"p"},"makeDinner")," as ",Object(i.b)("inlineCode",{parentName:"p"},"@VisibleForTesting"),", or\nsuppressing the warning by annotating the ",Object(i.b)("inlineCode",{parentName:"p"},"Dinner")," class or ",Object(i.b)("inlineCode",{parentName:"p"},"makeDinner")," method\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadSafe(enableChecks = false)"),"."),Object(i.b)("h3",{id:"readwrite-race"},"Read/Write Race"),Object(i.b)("p",null,"We sometimes need to protect read accesses as well as writes. Consider the\nfollowing class with unsynchronized methods."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"@ThreadSafe\npublic class Account {\n\n  int mBalance = 0;\n\n  public void deposit(int amount) {\n    if (amount > 0) {\n      mBalance += amount;\n    }\n  }\n\n  public int withdraw(int amount){\n    if (amount >= 0 && mBalance - amount >= 0) {\n      mBalance -= amount;\n      return mBalance;\n    } else {\n      return 0;\n    }\n  }\n}\n")),Object(i.b)("p",null,"If you run the ",Object(i.b)("inlineCode",{parentName:"p"},"withdraw()")," method in parallel with itself or with ",Object(i.b)("inlineCode",{parentName:"p"},"deposit()"),"\nyou can get unexpected results here. For instance, if the stored balance is 11\nand you run ",Object(i.b)("inlineCode",{parentName:"p"},"withdraw(10)")," in parallel with itself you can get a negative\nbalance. Furthermore, if you synchronize only the write statement\n",Object(i.b)("inlineCode",{parentName:"p"},"mBalance -= amount"),", then you can still get this bad result. The reason is that\nthere is a read/write race between the boolean condition\n",Object(i.b)("inlineCode",{parentName:"p"},"mBalance - amount >= 0")," and the writes. RacerD will duly warn"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Read/Write race. Public method int Account.withdraw(int) reads from field Account.mBalance. Potentially races with writes in methods void Account.deposit(int), int Account.withdraw(int)")),Object(i.b)("p",null,"on the line with this boolean condition."),Object(i.b)("p",null,"A solution to the threading problem here is to make both methods ",Object(i.b)("inlineCode",{parentName:"p"},"synchronized"),"\nto wrap both read and write accesses, or to use an ",Object(i.b)("inlineCode",{parentName:"p"},"AtomicInteger")," for\n",Object(i.b)("inlineCode",{parentName:"p"},"mBalance")," rather than an ordinary ",Object(i.b)("inlineCode",{parentName:"p"},"int"),"."),Object(i.b)("h3",{id:"interface-not-thread-safe"},"Interface not thread-safe"),Object(i.b)("p",null,"In the following code, RacerD will report an ",Object(i.b)("inlineCode",{parentName:"p"},"Interface not thread-safe")," warning\non the call to ",Object(i.b)("inlineCode",{parentName:"p"},"i.bar()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"interface I {\n  void bar();\n}\n\n@ThreadSafe\nclass C {\n  void foo(I i) {\n    i.bar(); // RacerD warns here\n  }\n}\n")),Object(i.b)("p",null,"The way to fix this warning is to add a ",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadSafe")," annotation to the\ninterface ",Object(i.b)("inlineCode",{parentName:"p"},"I"),", which will enforce the thread-safety of each of the\nimplementations of ",Object(i.b)("inlineCode",{parentName:"p"},"I"),"."),Object(i.b)("p",null,"You might wonder why it's necessary to annotate ",Object(i.b)("inlineCode",{parentName:"p"},"I")," -- can't RacerD just look at\nall the implementations of ",Object(i.b)("inlineCode",{parentName:"p"},"i")," at the call site for ",Object(i.b)("inlineCode",{parentName:"p"},"bar"),"? Although this is a\nfine idea idea in principle, it's a bad idea in practice due to a (a) separate\ncompilation and (b) our diff-based deployment model. In the example above, the\ncompiler doesn't have to know about all implementations (or indeed, any\nimplementations) of ",Object(i.b)("inlineCode",{parentName:"p"},"I")," at the time it compiles this code, so there's no\nguarantee that RacerD will know about or be able to check all implementations of\n",Object(i.b)("inlineCode",{parentName:"p"},"I"),". That's (a). For (b), say that we check that all implementations of ",Object(i.b)("inlineCode",{parentName:"p"},"I")," are\nthread-safe at the time this code is written, but we don't add the annotation.\nIf someone else comes along and adds a new implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"I")," that is not\nthread-safe, RacerD will have no way of knowing that this will cause a potential\nbug in ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),". But if ",Object(i.b)("inlineCode",{parentName:"p"},"I")," is annotated, RacerD will enforce that all new\nimplementations of ",Object(i.b)("inlineCode",{parentName:"p"},"I")," are thread-safe, and ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," will remain bug-free."),Object(i.b)("h2",{id:"annotations-to-help-racerd-understand-your-code"},"Annotations to help RacerD understand your code"),Object(i.b)("p",null,"Getting started with RacerD doesn't require any annotations at all -- RacerD\nwill look at your usage of locks and figure out what data is not guarded\nconsistently. But increasing the coverage and signal-to-noise ratio may require\nadding ",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadSafe")," annotations along with some of the other annotations\ndescribed below. Most of annotations described below can be used via the Maven\nCentral package available\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://maven-repository.com/artifact/com.facebook.infer.annotation/infer-annotation"}),"here"),"."),Object(i.b)("h3",{id:"threadconfined"},Object(i.b)("inlineCode",{parentName:"h3"},"@ThreadConfined")),Object(i.b)("p",null,"The intuitive idea of thread-safety is that a class is impervious to concurrency\nissues for all concurrent contexts, even those that have not been written yet\n(it is future-proof). RacerD implements this by naively assuming that any method\ncan potentially be called on any thread. You may determine, however, that an\nobject, method, or field is only ever accessed on a single thread during program\nexecution. Annotating such elements with ",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadConfined")," informs RacerD of\nthis restriction. Note that a thread-confined method cannot race with itself but\nit can still race with other methods."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"List mCache;\n\n@ThreadConfined(UI)\nvoid prepareCache() {\n  // populate the cache\n  mCache.add(...);\n  // post cache cleanup task to run later\n  mUIExecutor.execute(new Runnable() {\n    @ThreadConfined(UI)\n    public void run() {\n      mCache.clear();\n    }\n  });\n}\n")),Object(i.b)("p",null,"In this example, both ",Object(i.b)("inlineCode",{parentName:"p"},"prepareCache")," and ",Object(i.b)("inlineCode",{parentName:"p"},"run")," touch ",Object(i.b)("inlineCode",{parentName:"p"},"mCache"),". But there's no\npossibility of a race between the two methods because both of them will run\nsequentially on the UI thread. Adding a ",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadConfined(UI)")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@UiThread"),"\nannotation to these methods will stop it from warning that there is a race on\n",Object(i.b)("inlineCode",{parentName:"p"},"mCache"),". We could also choose to add a ",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadConfined")," annotation to ",Object(i.b)("inlineCode",{parentName:"p"},"mCache"),"\nitself."),Object(i.b)("h3",{id:"functional"},Object(i.b)("inlineCode",{parentName:"h3"},"@Functional")),Object(i.b)("p",null,"Not all races are bugs; a race can be benign. Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"@Functional Boolean askNetworkIfShouldShowFeature();\n\nprivate Boolean mShouldShowFeature;\n\n@ThreadSafe boolean shouldShowFeature() {\n  if (mShouldShowFeature == null) {\n    mShouldShowFeature = askNetworkIfShouldShowFeature();\n  }\n  return mShouldShowFeature;\n}\n")),Object(i.b)("p",null,"This code caches the result of an expensive network call that checks whether the\ncurrent user should be shown an experimental feature. This code looks racy, and\nindeed it is: if two threads execute ",Object(i.b)("inlineCode",{parentName:"p"},"shouldShowFeature()")," at the same time, one\nmay read ",Object(i.b)("inlineCode",{parentName:"p"},"mShouldShowFeature")," at the same time the other is writing it."),Object(i.b)("p",null,"However, this is actually a ",Object(i.b)("em",{parentName:"p"},"benign")," race that the programmer intentionally\nallows for performance reasons. The reason this code is safe is that the\nprogrammer knows that ",Object(i.b)("inlineCode",{parentName:"p"},"askNetworkIfShouldShowFeature()")," will always return the\nsame value in the same run of the app. Adding synchronization would remove the\nrace, but acquiring/releasing locks and lock contention would potentially slow\ndown every call to ",Object(i.b)("inlineCode",{parentName:"p"},"shouldShowFeature()"),". The benign race approach makes every\ncall after the first fast without changing the safety of the code."),Object(i.b)("p",null,"RacerD will report a race on this code by default, but adding the\n",Object(i.b)("inlineCode",{parentName:"p"},"@Functional annotation to askNetworkIfShouldShowFeature()")," informs RacerD that\nthe function is always expected to return the same value. This assumption allows\nRacerD to understand that this particular code is safe, though it will still\n(correctly) warn if ",Object(i.b)("inlineCode",{parentName:"p"},"mShouldShowFeature")," is read/written elsewhere."),Object(i.b)("p",null,"Be sure not to use the ",Object(i.b)("inlineCode",{parentName:"p"},"@Functional")," pattern for ",Object(i.b)("em",{parentName:"p"},"singleton instantiation"),', as\nit\'s possible the "singleton" can be constructed more than once.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"public class MySingleton {\n  private static sInstance;\n\n  // Not @Functional\n  public MySingleton getInstance() {\n    if (sInstance == null) {\n      // Different threads may construct their own instances.\n      sInstance == new MySingleton();\n    }\n    return sInstance;\n  }\n}\n")),Object(i.b)("h3",{id:"returnsownership"},Object(i.b)("inlineCode",{parentName:"h3"},"@ReturnsOwnership")),Object(i.b)("p",null,"RacerD does not warn on unprotected writes to ",Object(i.b)("em",{parentName:"p"},"owned")," objects. An object is\nowned if it has been freshly allocated in the current thread and has not escaped\nto another thread. RacerDf automatically tracks ownership in most cases, but it\nneeds help with ",Object(i.b)("inlineCode",{parentName:"p"},"abstract")," and ",Object(i.b)("inlineCode",{parentName:"p"},"interface")," methods that return ownership:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"@ThreadSafe\npublic interface Car {\n  @ReturnsOwnership abstract Car buyCar();\n\n  void carsStuff() {\n    Car myCar = new Car();\n    myCar.wheels = 4; // RacerD won't warn here because it knows myCar is owned\n    Car otherCar = buyCar();\n    otherCar.wheels = 3; // RacerD would normally warn here, but won't because of the `@ReturnsOwnership` annotation\n  }\n}\n")),Object(i.b)("h3",{id:"visiblefortesting"},Object(i.b)("inlineCode",{parentName:"h3"},"@VisibleForTesting")),Object(i.b)("p",null,"RacerD reports races between any two non",Object(i.b)("inlineCode",{parentName:"p"},"-private")," methods of a class that may\nrun in a concurrent context. Sometimes, a RacerD report may be false because one\nof the methods cannot actually be called from outside the current class. One fix\nis making the method ",Object(i.b)("inlineCode",{parentName:"p"},"private")," to enforce this, but this might break unit tests\nthat need to call the method in order to test it. In this case, the\n",Object(i.b)("inlineCode",{parentName:"p"},"@VisibleForTesting")," annotation will allow RacerD to consider the method as\neffectively ",Object(i.b)("inlineCode",{parentName:"p"},"private")," will still allowing it to be called from the unit test:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"@VisibleForTesting void setF() {\n  this.f = ...; // RacerD would normally warn here, but @VisibleForTesting will silence the warning\n}\n\nsynchronized void setFWithLock() {\n  setF();\n}\n")),Object(i.b)("p",null,"Unlike the other annotations shown here, this one lives in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/support/annotation/VisibleForTesting.html"}),"Android"),"."),Object(i.b)("h2",{id:"interprocedural-reasoning"},Object(i.b)("a",{name:"interprocedural"})," Interprocedural Reasoning"),Object(i.b)("p",null,"An important feature of RacerD is that it finds races by analyzing not just one\nfile or class, but by looking at memory accesses that occur after going through\nseveral procedure calls. It handles this even between classes and between files."),Object(i.b)("p",null,"Here is a very basic example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"@ThreadSafe\nclass A{\n\n  void m1(B bb) {\n    bb.meth_write();\n  }\n}\n\nclass B{\n Integer x;\n\n void meth_write() {\n   x = 88;\n }\n\n}\n")),Object(i.b)("p",null,"Class ",Object(i.b)("inlineCode",{parentName:"p"},"B")," is not annotated ",Object(i.b)("inlineCode",{parentName:"p"},"@ThreadSafe")," and does not have any locks, so RacerD\ndoes not directly look for threading issues there. However, method ",Object(i.b)("inlineCode",{parentName:"p"},"m1()")," in\nclass ",Object(i.b)("inlineCode",{parentName:"p"},"A")," has a potential self-race, if it is run in parallel with itself and\nthe same argument for each call. RacerD discovers this."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"InterProc.java:17: error: THREAD_SAFETY_VIOLATION\n  Unprotected write. Non-private method `A.m1` indirectly writes to field `&this.B.x` outside of synchronization.\n Reporting because the current class is annotated `@ThreadSafe`, so we assume that this method can run in\n parallel with other non-private methods in the class (incuding itself).\n  15.\n  16.     void m1(B bb) {\n  17. >     bb.meth_write();\n  18.     }\n  19.   }\n")),Object(i.b)("p",null,"RacerD does this sort of reasoning using what is known as a ",Object(i.b)("em",{parentName:"p"},"compositional\ninteprocedural analysis"),". There, each method is analyzed independently of its\ncontext to produce a summary of the behaviour of the procedure. In this case the\nsummaries for ",Object(i.b)("inlineCode",{parentName:"p"},"m1()' and"),"meth()' include information as follows."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Procedure: void A.m1(B)\nAccesses: { Unprotected({ 1 }) -> { Write to &bb.B.x at void B.meth_write() at line 17 } }\n\nProcedure: void B.meth_write()\nAccesses { Unprotected({ 0 }) -> { Write to &this.B.x at  at line 25 } }\n")),Object(i.b)("p",null,"The descriptions here are cryptic and do not include all the information in the\nsummaries, but the main point is that you can use RacerD to look for races in\ncodebases where the mutations done by threads might occur only after a chain of\nprocedure calls."),Object(i.b)("h2",{id:"context-and-selected-related-work"},Object(i.b)("a",{name:"context"})," Context and Selected Related Work"),Object(i.b)("p",null,"Reasoning about concurrency divides into bug detection and proving absence of\nbugs. RacerD is on the detection side of reasoning."),Object(i.b)("p",null,"The rapid growth in the number of interleavings is problematic for tools that\nattempt exhaustive exploration. With just 150 instructions for two threads, the\nnumber 10^88 of interleavings is more that the estimated number of atoms in the\nknown universe.\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Partial_order_reduction"}),"There has been important work which uses various techniques to attempt to reduce the number of interleavings"),"\nwhile still in principle covering all possibilities, but scale is still a\nchallenge. Note that RacerD is not exhaustive: it has false negatives (missed\nbugs). But in compensation it is fast, and effective (it finds bugs in\npractice)."),Object(i.b)("p",null,"Static analysis for concurrency has attracted a lot of attention from\nresearchers, but difficulties with scalability and precision have meant that\nprevious techniques have had little industrial impact. Automatic static race\ndetection itself has seen significant work. The most advanced approaches,\nexemplified by the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.cis.upenn.edu/~mhnaik/pubs/pldi06.pdf"}),"Chord"),"\ntool, often use a whole-program analysis paired with a sophisticated alias\nanalysis, two features we have consciously avoided. Generally speaking, the\nleading research tools can be more precise, but RacerD is faster and can operate\nwithout the whole program: we have opted to go for speed in a way that enables\nindustrial deployment on a large, rapidly changing codebase, while trying to use\nas simple techniques as possible to cover many (not all) of the patterns covered\nby slower but precise research tools."),Object(i.b)("p",null,"An industrial static analysis tool from\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://homepages.inf.ed.ac.uk/dts/pub/avocs2015.pdf"}),"Contemplate")," also targets\n@ThreadSafe annotations, but limits the amount of inter-procedural reasoning:\n\u201cThis analysis is interprocedural, but to keep the overall analysis scalable,\nonly calls to private and protected methods on the same class are followed\u201d.\nRacerD does deep, cross-file and cross-class inter-procedural reasoning, and yet\nstill scales; the inter-class capability was one of the first requests from\nFacebook engineers.\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.facebook.com/posts/1537144479682247/finding-inter-procedural-bugs-at-scale-with-infer-static-analyzer/"}),"A separate blog post looked at 100 recent data race fixes"),"\nin Infer's deployment in various bug categories, and for data races observed\nthat 53 of them were inter-file (and thus involving multiple classes).\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"racerd#interprocedural"}),"See above")," for an example of RacerD's interprocedural\ncapabilities."),Object(i.b)("p",null,"One reaction to the challenge of developing effective static race detectors has\nbeen to ask the programmer to do more work to help the analyzer. Examples of\nthis approach include the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://clang.llvm.org/docs/ThreadSafetyAnalysis.html"}),"Clang Thread Safety Analyzer"),",\nthe typing of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/std/sync/struct.Mutex.html"}),"locks")," in\nRust, and the use/checking of @GuardedBy annotations in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://homes.cs.washington.edu/~mernst/pubs/locking-semantics-nfm2016.pdf"}),"Java"),"\nincluding in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/google/error-prone/blob/master/docs/bugpattern/GuardedBy.md"}),"Google's Error Prone analyzer"),".\nWhen lock annotations are present they make the analyzer's life easier, and we\nhave\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"checkers-bug-types#UNSAFE_GUARDEDBY_ACCESS"}),"GuardedBy checking as part of Infer"),"\n(though separate from the race detector). Our GuardedBy checker can find some\nbugs that RacerD does not (see\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"checkers-bug-types#anonymous_inner"}),"this example on anonymous inner classes"),"),\nbut the race detector finds a greater number because it can work on un-annotated\ncode. It is possible to have a very effective race analysis without decreeing\nthat such annotations must be present. This was essential for our deployment,\nsince ",Object(i.b)("em",{parentName:"p"},"requiring")," lock annotations would have been a show stopper for converting\nmany thousands of lines of code to a concurrent context. We believe that this\nfinding should be transportable to new type systems and language designs, as\nwell as to other analyses for existing languages."),Object(i.b)("p",null,"Another reaction to difficulties in static race detection has been to instead\ndevelop dynamic analyses, automatic testing tools which work by running a\nprogram to attempt to find flaws. Google's Thread Sanitizer is a widely used and\nmature tool in this area, which has been used in production to find many bugs in\nC-family languages.\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.cs.columbia.edu/~junfeng/11fa-e6121/papers/thread-sanitizer.pdf"}),"The Thread Sanitizer authors explicitly call out limitations with static race analyzers"),"\nas part of their motivation: \u201cIt seems unlikely that static detectors will work\neffectively in our environment: Google\u2019s code is large and complex enough that\nit would be expensive to add the annotations required by a typical static\ndetector\u201d."),Object(i.b)("p",null,"We have worked to limit the annotations that RacerD needs, for reasons similar\nthose expressed by the Thread Sanitizer authors. And we have sought to bring the\ncomplementary benefits of static analysis \u2014 possibility of cheaper analysis and\nfast reporting, and ability to analyze code before it is placed in a context to\nrun \u2014 to race detection. But we are interested as well in the future in\nleveraging ideas in the dynamic techniques to improve or add to our analysis for\nrace detection."),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("p",null,"There are a number of known limitations to the design of the race detector."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It looks for races involving syntactically identical access paths, and misses\nraces due to aliasing"),Object(i.b)("li",{parentName:"ul"},"It misses races that arise from a locally declared object escaping its scope"),Object(i.b)("li",{parentName:"ul"},"It uses a boolean locks abstraction, and so misses races where two accesses\nare mistakenly protected by different locks"),Object(i.b)("li",{parentName:"ul"},"It assumes a deep ownership model, which misses races where local objects\nrefer to or contain non-owned objects."),Object(i.b)("li",{parentName:"ul"},"It avoids reasoning about weak memory and Java's volatile keyword")),Object(i.b)("p",null,"Most of these limitations are consistent with the design goal of reducing false\npositives, even if they lead to false negatives. They also allow technical\ntradeoffs which are different than if we were to favour reduction of false\nnegatives over false positives."),Object(i.b)("p",null,"A different kind of limitation concerns the bugs searched for: Data races are\nthe most basic form of concurrency error, but there are many types of\nconcurrency issues out there that RacerD does not check for (but might in the\nfuture). Examples include deadlock, atomicity, and check-then-act bugs (shown\nbelow). You must look for these bugs yourself!"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"@ThreadSafe\npublic class SynchronizedList<T> {\n  synchronized boolean isEmpty() { ... }\n  synchronized T add(T item) { ... }\n\n// Not thread safe!!!\npublic class ListUtil<T> {\n  public void addIfEmpty(SynchronizedList<T> list, T item) {\n    if (list.isEmpty()) {\n      // In a race, another thread can add to the list here.\n      list.add(item);\n    }\n  }\n}\n")),Object(i.b)("p",null,"Finally, using ",Object(i.b)("inlineCode",{parentName:"p"},"synchronized")," blindly as a means to fix every unprotected write\nor read is not always safe. Even with RacerD, finding, understanding, and fixing\nconcurrency issues is difficult. If you would like to learn more about best\npractices, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://jcip.net/"}),"Java Concurrency in Practice")," is an excellent\nresource."))}d.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(t),p=a,u=h["".concat(o,".").concat(p)]||h[p]||b[p]||i;return t?r.a.createElement(u,s(s({ref:n},l),{},{components:t})):r.a.createElement(u,s({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);